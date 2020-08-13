import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/user.js';

const saltRounds = 10;
const route = express.Router();

route
  .post('/login', async (req, res) => {
    const user = await User.findOne({ login: req.body.login });
    if ((user) && (await bcrypt.compare(req.body.password, user.password))) {
      req.session.user = user;
      const { login, status } = user;
      req.session.user.login = login;
      req.session.user.status = status;
      res.json({ message: 'Successful login' });
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
    const { login, password, status } = req.body;
    const userCheck = await User.findOne({ login });
    if (!userCheck) {
      const user = new User({
        login,
        status,
        password: await bcrypt.hash(password, saltRounds),
      });
      await user.save();
      res.json({ message: 'User has been created.' });
    } else res.json({ message: 'Something went wrong.' });
  })
  // delete user
  .delete('/', async (req, res) => {
    const { login, password, status } = req.body;

    const adminStatus = req.session.user.status;
    if (adminStatus === ('teacher' || 'chieftain')) {
      const user = new User({
        login,
        status,
        password: await bcrypt.hash(password, saltRounds),
      });
      await user.save();
      res.json({ message: 'User has been created.' });
    } else res.json({ message: 'Something went wrong.' });
  });

export default route;
