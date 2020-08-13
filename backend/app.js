import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
// import path from 'path';

import userRoute from './routes/user-route.js'

const FileStore = sessionFileStore(session);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Подключаем mongoose.
mongoose.connect('mongodb://localhost:27017/lyceum', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cookieParser());

// SESSION
app.use(session({
  store: new FileStore(),
  key: 'user_sid',
  secret: 'qwer1tyuiop2asdfgh3jklzxc4vbnmASDQW5EZXCRF6VBGTYHNM78JUIKL9OP0',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false },
}));

app.use((req, res, next) => {
  if (req.session.user) {
    res.locals.login = req.session.user.login;
    // console.log(res.locals);
    // next();
  }
  next();
  // return res.redirect(401, '/login');
});

/// ////////////////////////////////////here will be ROUTES
app.use('/user', userRoute);
/// ///////////////////////////////////////ROUTES end here

// start server
app.listen(process.env.PORT ?? 3000);

export default app;