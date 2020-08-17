import express from 'express';
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
import { UserModel } from '../Database/database.js';

const saltRounds = 10;
const route = express.Router();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'boma385@gmail.com', // generated ethereal user
    pass: 'Thunderbolt', // generated ethereal password
  },
});

route
  .post('/login', async (req, res) => {
    const user = await UserModel.findOne({ email: req.body.email });
    if ((user) && (await bcrypt.compare(req.body.password, user.password))) {
      req.session.user = user;
      req.session.user.password = '';
      res.json({ message: 'Successful login', user: req.session.user, cookie: req.session.cookie });
    } else res.json({ message: 'Something went wrong. Check whether your username or password is correct.' });
  })
  .post('/logout', (req, res) => {
    if (req.session.user) {
      req.session.destroy(() => {
        res.clearCookie('user_sid', { path: '/' });
        res.json({ message: 'Successful logout', status: '' });
      });
    } else res.json({ message: 'Something went wrong' });
  })
  // create user
  .put('/new', async (req, res) => {
    try {
      // const user = new UserModel({
      //   name: 'admin', // ФИО
      //   email: 'boma385@gmail.com',
      //   status: 'chieftain',
      //   password: await bcrypt.hash('admin', saltRounds),
      // });
      // await user.save();
      const {
        password, status, name, email,
      } = req.body;
      const adminStatus = req.session.user.status;
      const userCheck = await UserModel.findOne({ email });
      if ((!userCheck && (adminStatus === 'chieftain' || 'teacher') && status === 'student' && req.session.user)
        || (!userCheck && adminStatus === 'chieftain' && req.session.user)) {
        // ДОБАВИТЬ РАССЫЛКУ ПИСЕМ НОВЫМ ЮЗЕРАМ---------------------------------------------------
        const send = {
          from: `"Elbrus admin" <${req.session.user.email}>`,
          to: `${email}`,
          subject: 'Аккаунт для Эльбрус Лектория',
          text: `Привет, ${name}!
                 Твой аккаунт от Эльбрус Лектория:
                 Логин: ${email}
                 Пароль: ${password}`,
        };
        transporter.sendMail(send, (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log(`email sent ${info.response}`);
          }
        });
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
    } catch {
      res.json({ message: 'Something went wrong.' });
    }
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
