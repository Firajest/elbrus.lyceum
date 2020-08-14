import express from 'express';
import bcrypt from 'bcrypt';
import { UserModel } from '../Database/database.js';

const saltRounds = 10;
const route = express.Router();

route
  .post('/login', async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email });
    if ((user) && (await bcrypt.compare(req.body.password, user.password))) {
      req.session.user = user;
      const { email, status } = user;
      req.session.user.email = email;
      req.session.user.status = status;
      res.json({ message: 'Successful login', user: email, status });
    } else res.json({ message: 'Something went wrong. Check whether your username or password is correct.' });
  })
  .get('/logout', (req, res) => {
    req.session.destroy(() => {
      res.clearCookie('user_sid', { path: '/' });
      res.json({ message: 'Successful logout' });
    });
  })
  // create user
  .put('/new', async (req, res) => {
    const {
      password, status, name, email,
    } = req.body;
    const adminStatus = req.session.user.status;
    const userCheck = await UserModel.findOne({ email });
    if ((!userCheck && (adminStatus === 'chieftain' || 'teacher') && status === 'student')
      || (!userCheck && adminStatus === 'chieftain')) {
      // ДОБАВИТЬ РАССЫЛКУ ПИСЕМ НОВЫМ ЮЗЕРАМ---------------------------------------------------
      const user = new UserModel({
        name, // ФИО
        email,
        status,
        password: await bcrypt.hash(password, saltRounds),
      });
      await user.save();
      console.log(user);
      res.json({ message: 'User has been created.' });
    } else res.json({ message: 'Something went wrong.' });
  })
  // delete user
  .delete('/', async (req, res) => {
    const { email, status } = req.body;
    const userToDelete = {
      email,
      status,
    };
    const adminStatus = req.session.user.status;
    if (((adminStatus === ('teacher' || 'chieftain') && userToDelete.status === 'student'))
      || ((adminStatus === 'chieftain') && (userToDelete.status === 'teacher' || 'student'))) {
      await UserModel.findOneAndRemove({ email: userToDelete.email });
      res.json({ message: 'User has been deleted.' });
    } else res.json({ message: 'Something went wrong.' });
  });

export default route;
