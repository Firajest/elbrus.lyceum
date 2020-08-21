import express from 'express';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user-route.js';
import dataRoute from './routes/data-route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const FileStore = sessionFileStore(session);

// SESSION
app.use(session({
  store: new FileStore(),
  key: 'user_sid',
  secret: process.env.SECRET.toString(),
  maxAge: 1000 * 60 * 60 * 24 * 30 * 12,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, expires: 1000 * 60 * 60 * 24 * 30 * 12 },
}));

app.use((req, res, next) => {
  if (req.session.user) {
    res.locals.login = req.session.user.login;
  }
  next();
});

/// ////////////////////////////////////here will be ROUTES
app.use('/user', userRoute);
app.use('/data', dataRoute);
/// ///////////////////////////////////////ROUTES end here

// start server
app.listen(process.env.PORT ?? 3001);

export default app;
