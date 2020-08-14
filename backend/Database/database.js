import mongoose from 'mongoose';
// import fake from 'faker';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://Elbrus:${process.env.DATABASE_PASSWORD}@lectoryi.pmshi.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;
console.log(process.env.DATABASE_PASSWORD);
try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.log(error);
}

mongoose.pluralize(null);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Ошибка соединения с MongoDB'));

const User = new mongoose.Schema({
  name: { // ФИО
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

const Phase = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Week = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phase: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Phase',
  },
});

const Day = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  linkYT: String,
  linkFile: String,
  linkPres: String,
  tags: [],
  phase: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Phase',
  },
  week: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Week',
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  updators: [
    {
      updator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Week',
      },
      date: { type: Date, default: Date.now },
    },
  ],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export const UserModel = mongoose.model('User', User);
export const PhaseModel = mongoose.model('Phase', Phase);
export const WeekModel = mongoose.model('Week', Week);
export const DayModel = mongoose.model('Day', Day);

async function addPhW() {
  // const ph1 = await PhaseModel.create({ name: 'Phase 1' });
  // const ph2 = await PhaseModel.create({ name: 'Phase 2' });
  // const ph3 = await PhaseModel.create({ name: 'Phase 3' });
  // const ph = await PhaseModel.find();
  // const ph1w1 = await WeekModel.create({ name: 'Week 1', phase: ph1._id });
  // const ph1w2 = await WeekModel.create({ name: 'Week 2', phase: ph1._id });
  // const ph1w3 = await WeekModel.create({ name: 'Week 3', phase: ph1._id });
  // const ph2w1 = await WeekModel.create({ name: 'Week 1', phase: ph2._id });
  // const ph2w2 = await WeekModel.create({ name: 'Week 2', phase: ph2._id });
  // const ph2w3 = await WeekModel.create({ name: 'Week 3', phase: ph2._id });
  // const ph3w1 = await WeekModel.create({ name: 'Week 1', phase: ph3._id });
  // const ph3w2 = await WeekModel.create({ name: 'Week 2', phase: ph3._id });
  // const ph3w3 = await WeekModel.create({ name: 'Week 3', phase: ph3._id });
  // const user = await UserModel.create({
  //   name: 'Tembot', login: 'admin', password: 'admin', status: 'superadmin',
  // });
  // const ph1 = await PhaseModel.findOne({ name: 'Phase 1' });
  // const ph2 = await PhaseModel.findOne({ name: 'Phase 2' });
  // const ph3 = await PhaseModel.findOne({ name: 'Phase 3' });
  // const ph1w1 = await WeekModel.findOne({ name: 'Week 1', phase: ph1._id });
  // const ph1w2 = await WeekModel.findOne({ name: 'Week 2', phase: ph1._id });
  // const ph1w3 = await WeekModel.findOne({ name: 'Week 3', phase: ph1._id });
  // const ph2w1 = await WeekModel.findOne({ name: 'Week 1', phase: ph2._id });
  // const ph2w2 = await WeekModel.findOne({ name: 'Week 2', phase: ph2._id });
  // const ph2w3 = await WeekModel.findOne({ name: 'Week 3', phase: ph2._id });
  // const ph3w1 = await WeekModel.findOne({ name: 'Week 1', phase: ph3._id });
  // const ph3w2 = await WeekModel.findOne({ name: 'Week 2', phase: ph3._id });
  // const ph3w3 = await WeekModel.findOne({ name: 'Week 3', phase: ph3._id });
  // const user = await UserModel.findOne({
  //   name: 'Tembot', login: 'admin', password: 'admin', status: 'superadmin',
  // });
  // const ph1w1day1 = await DayModel.create({
  //   name: 'Day 1 - DOM Events',
  //   tags: ['DOM'],
  //   phase: ph1._id,
  //   week: ph1w1._id,
  //   creator: user._id,
  // });
  // const ph1w1day2 = await DayModel.create({
  //   name: 'Day 2 - Arrays, Array Methods',
  //   tags: ['Arrays', 'Array Methods'],
  //   phase: ph1._id,
  //   week: ph1w1._id,
  //   creator: user._id,
  // });
  // const ph1w1day3 = await DayModel.create({
  //   name: 'Day 3 - Algorithms',
  //   tags: ['Algorithms'],
  //   phase: ph1._id,
  //   week: ph1w1._id,
  //   creator: user._id,
  // });
  // const ph1w1day4 = await DayModel.create({
  //   name: 'Day 4 - Strings',
  //   tags: ['Strings'],
  //   phase: ph1._id,
  //   week: ph1w1._id,
  //   creator: user._id,
  // });
  // const ph1w2day1 = await DayModel.create({
  //   name: 'Day 1 - Object, This, Proto, Prototype',
  //   tags: ['Object', 'This', 'Proto', 'Prototype'],
  //   phase: ph1._id,
  //   week: ph1w2._id,
  //   creator: user._id,
  // });
  // const ph1w2day2 = await DayModel.create({
  //   name: 'Day 2 - Get, Set, Class',
  //   tags: ['Get', 'Set', 'Class'],
  //   phase: ph1._id,
  //   week: ph1w2._id,
  //   creator: user._id,
  // });
  // const ph1w2day3 = await DayModel.create({
  //   name: 'Day 3 - Node.js',
  //   tags: ['Node', 'Node.js'],
  //   phase: ph1._id,
  //   week: ph1w2._id,
  //   creator: user._id,
  // });
  // const ph1w2day4 = await DayModel.create({
  //   name: 'Day 4 - SetTimeout, SetInterval',
  //   tags: ['SetTimeout', 'SetInterval'],
  //   phase: ph1._id,
  //   week: ph1w2._id,
  //   creator: user._id,
  // });
  // const ph1w3day1 = await DayModel.create({
  //   name: 'Day 1 - Event Loop, Promise, Asynс, Await',
  //   tags: ['Event Loop', 'Promise', 'Asynс', 'Await'],
  //   phase: ph1._id,
  //   week: ph1w3._id,
  //   creator: user._id,
  // });
  // const ph1w3day2 = await DayModel.create({
  //   name: 'Day 2 - MongoDB',
  //   tags: ['MongoDB', 'Mongo'],
  //   phase: ph1._id,
  //   week: ph1w3._id,
  //   creator: user._id,
  // });
  // const ph1w3day3 = await DayModel.create({
  //   name: 'Day 3 - Compass, ODM, Mongoose',
  //   tags: ['Compass', 'ODM', 'Mongoose'],
  //   phase: ph1._id,
  //   week: ph1w3._id,
  //   creator: user._id,
  // });
  // const ph1w3day4 = await DayModel.create({
  //   name: 'Day 4 - Mongoose Methods',
  //   tags: ['Mongoose'],
  //   phase: ph1._id,
  //   week: ph1w3._id,
  //   creator: user._id,
  // });
  // const ph2w1day1 = await DayModel.create({
  //   name: 'Day 1 - HTTP, Express, Handlebars',
  //   tags: ['HTTP', 'Express', 'Handlebars'],
  //   phase: ph2._id,
  //   week: ph2w1._id,
  //   creator: user._id,
  // });
  // const ph2w1day2 = await DayModel.create({
  //   name: 'Day 2 - Express Router, Middleware, Closure',
  //   tags: ['Express Router', 'Middleware', 'Closure'],
  //   phase: ph2._id,
  //   week: ph2w1._id,
  //   creator: user._id,
  // });
  // const ph2w1day3 = await DayModel.create({
  //   name: 'Day 3 - Ajax',
  //   tags: ['Ajax'],
  //   phase: ph2._id,
  //   week: ph2w1._id,
  //   creator: user._id,
  // });
  // const ph2w1day4 = await DayModel.create({
  //   name: 'Day 4 - Client-Side Handlebars',
  //   tags: ['Client-Side', 'Client-Side Handlebars'],
  //   phase: ph2._id,
  //   week: ph2w1._id,
  //   creator: user._id,
  // });
  // const ph2w2day1 = await DayModel.create({
  //   name: 'Day 1 - REST API',
  //   tags: ['REST', 'REST API'],
  //   phase: ph2._id,
  //   week: ph2w2._id,
  //   creator: user._id,
  // });
  // const ph2w2day2 = await DayModel.create({
  //   name: 'Day 2 - Session. Cookies',
  //   tags: ['Session', 'Cookies'],
  //   phase: ph2._id,
  //   week: ph2w2._id,
  //   creator: user._id,
  // });
  // const ph2w2day3 = await DayModel.create({
  //   name: 'Day 3 - CORS',
  //   tags: ['CORS'],
  //   phase: ph2._id,
  //   week: ph2w2._id,
  //   creator: user._id,
  // });
  // const ph2w2day4 = await DayModel.create({
  //   name: 'Day 4 - Heroku. Atlas',
  //   tags: ['Heroku', 'Atlas'],
  //   phase: ph2._id,
  //   week: ph2w2._id,
  //   creator: user._id,
  // });
  // const ph2w3day1 = await DayModel.create({
  //   name: 'Day 1 - WebSocket',
  //   tags: ['WebSocket'],
  //   phase: ph2._id,
  //   week: ph2w3._id,
  //   creator: user._id,
  // });
  // const ph3w1day1 = await DayModel.create({
  //   name: 'Day 1 - React',
  //   tags: ['React'],
  //   phase: ph3._id,
  //   week: ph3w1._id,
  //   creator: user._id,
  // });
  // const ph3w1day2 = await DayModel.create({
  //   name: 'Day 2 - memo, useMemo, useContext, SCSS, Controlled Forms',
  //   tags: ['memo', 'useMemo', 'useContext', 'SCSS', 'Controlled Forms'],
  //   phase: ph3._id,
  //   week: ph3w1._id,
  //   creator: user._id,
  // });
  // const ph3w1day3 = await DayModel.create({
  //   name: 'Day 3 - Router, Classes',
  //   tags: ['Router', 'Classes'],
  //   phase: ph3._id,
  //   week: ph3w1._id,
  //   creator: user._id,
  // });
  // const ph3w1day4 = await DayModel.create({
  //   name: 'Day 4 - Redux',
  //   tags: ['Redux'],
  //   phase: ph3._id,
  //   week: ph3w1._id,
  //   creator: user._id,
  // });
  // const ph3w2day1 = await DayModel.create({
  //   name: 'Day 1 - Redux Thunk, Redux Saga',
  //   tags: ['Redux', 'Thunk', 'Saga'],
  //   phase: ph3._id,
  //   week: ph3w2._id,
  //   creator: user._id,
  // });
}

addPhW();

export async function getPh() {
  const ph = await PhaseModel.find();
  return ph;
}

export async function getWeek(phID) {
  const weeks = await WeekModel.find({ phase: phID });
  return weeks;
}

export async function getDay(weekID) {
  const day = await DayModel.findOne({ week: weekID });
  return day;
}

export async function getUser(userID) {
  const user = await DayModel.findOne({ _id: userID });
  return user;
}
