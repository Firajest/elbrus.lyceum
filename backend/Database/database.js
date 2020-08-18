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
  email: {
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
  //   name: 'Tembot', email: 'maremshaov.t@yandex.ru', password: 'admin', status: 'superadmin',
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
  //   linkYT: 'https://www.youtube.com/watch?v=aAXx_g5dBrE&list=PL8NGcSL3ZP--NreJhQ1WuGsDCKHlg57tv&index=2&t=0s',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/17oxmm1wznbYTr9aEW8FkrNtjbD7QnDNjuU0WPKoVkR0?format=pdf&name=P1-W1-D1%20-%20DOM%20Events',
  //   phase: ph1._id,
  //   week: ph1w1._id,
  //   creator: user._id,
  // });
  // const ph1w1day2 = await DayModel.create({
  //   name: 'Day 2 - Arrays, Array Methods',
  //   tags: ['Arrays', 'Array Methods'],
  //   linkYT: 'https://www.youtube.com/watch?v=C-YA22eXy7w&list=PL8NGcSL3ZP--NreJhQ1WuGsDCKHlg57tv&index=2',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1MMLAUvBGFEqIrRI3RK4T5q9TCjdKkEOOFgkhCR703uI?format=pdf&name=P1-W1-D2%20-%20Arrays,%20Array%20Methods',
  //   phase: ph1._id,
  //   week: ph1w1._id,
  //   creator: user._id,
  // });
  // const ph1w1day3 = await DayModel.create({
  //   name: 'Day 3 - Algorithms',
  //   tags: ['Algorithms'],
  //   linkYT: 'https://www.youtube.com/watch?v=wpLE4pm-GWs&list=PL8NGcSL3ZP--NreJhQ1WuGsDCKHlg57tv&index=3',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/10UOqnJabz8qfiTEPR35RXtLNbN6ukuy2MZkK3y33Qd4?format=pdf&name=P1-W1-D3%20-%20Algorithms',
  //   phase: ph1._id,
  //   week: ph1w1._id,
  //   creator: user._id,
  // });
  // const ph1w1day4 = await DayModel.create({
  //   name: 'Day 4 - Strings, RegExps',
  //   tags: ['Strings', 'RegExps'],
  //   linkYT: 'https://www.youtube.com/watch?v=VaIyCI6LJI4&list=PL8NGcSL3ZP--NreJhQ1WuGsDCKHlg57tv&index=4',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1C4GbacKaCe3IX2Bw_VO3NR4mpkwlvf1st2JCQ3pQVYw?format=pdf&name=P1-W1-D4%20-%20Strings',
  //   phase: ph1._id,
  //   week: ph1w1._id,
  //   creator: user._id,
  // });
  // const ph1w2day1 = await DayModel.create({
  //   name: 'Day 1 - Object, This, Proto, Prototype',
  //   tags: ['Object', 'This', 'Proto', 'Prototype'],
  //   linkYT: 'https://www.youtube.com/watch?v=l2cXTxZnnLM&list=PL8NGcSL3ZP--PtCkSU-2XuFTVpcqbAvjq&index=2&t=0s',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1O-5r8ak5j5Q1edKH0P54mVMuwkLRGXXxycAS80RZTUE?format=pdf&name=P1-W2-D1%20-Object,Proto,Prototype',
  //   phase: ph1._id,
  //   week: ph1w2._id,
  //   creator: user._id,
  // });
  // const ph1w2day2 = await DayModel.create({
  //   name: 'Day 2 - Get, Set, Class',
  //   tags: ['Get', 'Set', 'Class'],
  //   linkYT: 'https://www.youtube.com/watch?v=sfKtKyOFxIQ&list=PL8NGcSL3ZP--PtCkSU-2XuFTVpcqbAvjq&index=3',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1SHduN0AFswLGy4er3nyfQyfuTElvvyvnkKbtVr-9eEA?format=pdf&name=P1-W2-D2%20-%20Object%20Properties,%20Prototypes',
  //   phase: ph1._id,
  //   week: ph1w2._id,
  //   creator: user._id,
  // });
  // const ph1w2day3 = await DayModel.create({
  //   name: 'Day 3 - Node.js',
  //   tags: ['Node', 'Node.js'],
  //   linkYT: 'https://www.youtube.com/watch?v=TmOFc0FfD0I&list=PL8NGcSL3ZP--PtCkSU-2XuFTVpcqbAvjq&index=4',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1Z97ZUqE5qM_rQXBinPKE72rO3YttDoG2JQ3Y1OmfD1Y?format=pdf&name=P1-W2-D3%20-%20Node,%20NPM,%20FS',
  //   phase: ph1._id,
  //   week: ph1w2._id,
  //   creator: user._id,
  // });
  // const ph1w2day4 = await DayModel.create({
  //   name: 'Day 4 - SetTimeout, SetInterval',
  //   tags: ['SetTimeout', 'SetInterval'],
  //   linkYT: 'https://www.youtube.com/watch?v=lkLQ30Nqk-Y&list=PL8NGcSL3ZP--PtCkSU-2XuFTVpcqbAvjq&index=5',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1ob-crSLRv6qNq1zHUpNJG7svyWyWH8fKKVWtkV45MFM?format=pdf&name=P1-W2-D4%20-%20Callback%20Functions,%20Event%20Loop,%20Argv',
  //   phase: ph1._id,
  //   week: ph1w2._id,
  //   creator: user._id,
  // });
  // const ph1w3day1 = await DayModel.create({
  //   name: 'Day 1 - Event Loop, Promise, Asynс, Await',
  //   tags: ['Event Loop', 'Promise', 'Asynс', 'Await'],
  //   linkYT: 'https://www.youtube.com/watch?v=xBCI_YxLxQw&list=PL8NGcSL3ZP--PtCkSU-2XuFTVpcqbAvjq&index=6',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1T0uYQ5eNq0OfT8p9cP6mHD4jfiFpjfPBWjLmKo-sTFw?format=pdf&name=P1-W3-D1%20-%20Promise,%20Async,%20Await',
  //   phase: ph1._id,
  //   week: ph1w3._id,
  //   creator: user._id,
  // });
  // const ph1w3day2 = await DayModel.create({
  //   name: 'Day 2 - MongoDB',
  //   tags: ['MongoDB', 'Mongo'],
  //   linkYT: 'https://www.youtube.com/watch?v=_hBc8iEO0Co&list=PL8NGcSL3ZP--PtCkSU-2XuFTVpcqbAvjq&index=7',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1grge5txGAZHVWasEoSoIOgnWLduCJRhBZc2ft5fYBxc?format=pdf&name=P1-W3-D2%20-%20MongoDB',
  //   phase: ph1._id,
  //   week: ph1w3._id,
  //   creator: user._id,
  // });
  // const ph1w3day3 = await DayModel.create({
  //   name: 'Day 3 - Compass, ODM, Mongoose',
  //   tags: ['Compass', 'ODM', 'Mongoose'],
  //   linkYT: 'https://www.youtube.com/watch?v=p2On2OsrfsY&list=PL8NGcSL3ZP--PtCkSU-2XuFTVpcqbAvjq&index=8',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/15qBoGTOc6LSHaPqOnxTvoVhKHN_WTAzI1yqbAF_h9V4?format=pdf&name=P1-W3-D3%20-%20ODM,%20Mongoose,%20CRUD',
  //   phase: ph1._id,
  //   week: ph1w3._id,
  //   creator: user._id,
  // });
  // const ph1w3day4 = await DayModel.create({
  //   name: 'Day 4 - Mongoose Methods',
  //   tags: ['Mongoose'],
  //   linkYT: 'https://www.youtube.com/watch?v=4TXmbHuxYbY&list=PL8NGcSL3ZP--PtCkSU-2XuFTVpcqbAvjq&index=10',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1t-x0fAkpUzZFkppI2FlgBs5OfFKRlUe2d0wOlXQq3f4?format=pdf&name=P1-W3-D4%20-%20Mongoose%20Methods,%20Mongoose%20Statics',
  //   phase: ph1._id,
  //   week: ph1w3._id,
  //   creator: user._id,
  // });
  // const ph2w1day1 = await DayModel.create({
  //   name: 'Day 1 - HTTP, Express, Handlebars',
  //   tags: ['HTTP', 'Express', 'Handlebars'],
  //   linkYT: 'https://www.youtube.com/watch?v=Oke1E55yOT0&list=PL8NGcSL3ZP-8rB-qgDyOSLgjH0zMUSMln&index=2&t=0s',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1FE9uBT_xXVmxxRZaDw5oS2uO7lJUhDchklVM7ugF37Q?format=pdf&name=P2-W1-D1%20-%20HTTP,%20Express,%20Handlebars',
  //   phase: ph2._id,
  //   week: ph2w1._id,
  //   creator: user._id,
  // });
  // const ph2w1day2 = await DayModel.create({
  //   name: 'Day 2 - Express Router, Middleware, Closure',
  //   tags: ['Express Router', 'Middleware', 'Closure'],
  //   linkYT: 'https://www.youtube.com/watch?v=ux3g5wxNT4Y&list=PL8NGcSL3ZP-8rB-qgDyOSLgjH0zMUSMln&index=3',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1kOiMiDpnfj-p76xjMvJGzRj3XR09VOgFhymn-wzpVj8?format=pdf&name=P2-W1-D2%20-%20Express%20Router,%20Middleware,%20Closure',
  //   phase: ph2._id,
  //   week: ph2w1._id,
  //   creator: user._id,
  // });
  // const ph2w1day3 = await DayModel.create({
  //   name: 'Day 3 - Ajax, Fetch API',
  //   tags: ['Ajax', 'Fetch'],
  //   linkYT: 'https://www.youtube.com/watch?v=gzYKzBlQmQE&list=PL8NGcSL3ZP-8rB-qgDyOSLgjH0zMUSMln&index=4',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/15CHq7K0Vyj89wsEgNo1wTAjZXYYoUYjCXxXdFbDaMIg?format=pdf&name=P2-W1-D3%20-%20Ajax',
  //   phase: ph2._id,
  //   week: ph2w1._id,
  //   creator: user._id,
  // });
  // const ph2w1day4 = await DayModel.create({
  //   name: 'Day 4 - Client-Side Handlebars',
  //   tags: ['Client-Side', 'Client-Side Handlebars'],
  //   linkYT: 'https://www.youtube.com/watch?v=yPtBJVdSZzw&list=PL8NGcSL3ZP-8rB-qgDyOSLgjH0zMUSMln&index=5',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/12vtUNGggoVWCubxnzqa0BVPABM83iqbHsaulp6Ci_dg?format=pdf&name=P2-W1-D4%20-%20Client%20Handlebars',
  //   phase: ph2._id,
  //   week: ph2w1._id,
  //   creator: user._id,
  // });
  // const ph2w2day1 = await DayModel.create({
  //   name: 'Day 1 - REST API',
  //   tags: ['REST', 'REST API'],
  //   linkYT: 'https://www.youtube.com/watch?v=XO1vTYp_ebk&list=PL8NGcSL3ZP-8HVap93XiJBvZrtePDAhJE&index=13',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1zkCljzE7snssafK7LQIBF2pF9uG1DSvVXY_iEzjLebQ?format=pdf&name=P2-W2-D1%20-%20REST%20API',
  //   phase: ph2._id,
  //   week: ph2w2._id,
  //   creator: user._id,
  // });
  // const ph2w2day2 = await DayModel.create({
  //   name: 'Day 2 - Session. Cookies',
  //   tags: ['Session', 'Cookies'],
  //   linkYT: 'https://www.youtube.com/watch?v=8Zi3UO9sW1s&list=PL8NGcSL3ZP-8HVap93XiJBvZrtePDAhJE&index=13&t=0s',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1ONL11ZowUY495UDoTmis8O8UXSY6Hep1ccPHXJDUqwE?format=pdf&name=P2-W2-D2%20-%20Cookies,%20Session',
  //   phase: ph2._id,
  //   week: ph2w2._id,
  //   creator: user._id,
  // });
  // const ph2w2day3 = await DayModel.create({
  //   name: 'Day 3 - CORS',
  //   tags: ['CORS'],
  //   linkYT: 'https://www.youtube.com/watch?v=T4jUMlFENjI&list=PL8NGcSL3ZP-8HVap93XiJBvZrtePDAhJE&index=2',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1HzzdP26WeOP1sXXdYmBGcs0-gAzuNP4-8P67EmlENEA?format=pdf&name=P2-W2-D3%20-%20CORS,%20PassportJS',
  //   phase: ph2._id,
  //   week: ph2w2._id,
  //   creator: user._id,
  // });
  // const ph2w2day4 = await DayModel.create({
  //   name: 'Day 4 - Heroku. Atlas',
  //   tags: ['Heroku', 'Atlas'],
  //   linkYT: 'https://www.youtube.com/watch?v=ZjgiAvkdSQ4&list=PL8NGcSL3ZP-8HVap93XiJBvZrtePDAhJE&index=11',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1MBm3Hn_ogDArHZQpoMwfl4iQUCMdHm34eU8ho5wKeJc?format=pdf&name=P2-W2-D4%20-%20process.env,%20Heroku',
  //   phase: ph2._id,
  //   week: ph2w2._id,
  //   creator: user._id,
  // });
  // const ph2w3day1 = await DayModel.create({
  //   name: 'Day 1 - WebSocket',
  //   tags: ['WebSocket'],
  //   linkYT: 'https://www.youtube.com/watch?v=wvHwNDQ2EaQ&list=PL8NGcSL3ZP-8HVap93XiJBvZrtePDAhJE&index=10',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1QLLgxnfEm2OMru5QH8ij5FyV-lUnbbr2_CY6UnqKM9w?format=pdf&name=P2-W3-D1%20-%20WebSockets',
  //   phase: ph2._id,
  //   week: ph2w3._id,
  //   creator: user._id,
  // });
  // const ph3w1day1 = await DayModel.create({
  //   name: 'Day 1 - React',
  //   tags: ['React'],
  //   linkYT: 'https://www.youtube.com/watch?v=cvolpJRki14&list=PL8NGcSL3ZP--VkdchlqMp0ItHzBp6vb77&index=3&t=0s',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1yXvvr4D16XVvG5wm24p_gPpmzBGykhDyJL5k_CAw2fs?format=pdf&name=P3-W1-D1%20-%20React%20Intro',
  //   phase: ph3._id,
  //   week: ph3w1._id,
  //   creator: user._id,
  // });
  // const ph3w1day2 = await DayModel.create({
  //   name: 'Day 2 - memo, useMemo, useContext, SCSS, Controlled Forms',
  //   tags: ['memo', 'useMemo', 'useContext', 'SCSS', 'Controlled Forms'],
  //   linkYT: 'https://www.youtube.com/watch?v=uNH94Xg1K9g&list=PL8NGcSL3ZP--rKaXNgvTNoxHziIzRWxmM&index=4&t=0s',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1_atS4ZMF1YHjfXgC-IEJIuRVJMgOwG6dHBOuGWs_wTw?format=pdf&name=P3-W1-D2%20-%20React,%20More%20Hooks,%20CSS',
  //   phase: ph3._id,
  //   week: ph3w1._id,
  //   creator: user._id,
  // });
  // const ph3w1day3 = await DayModel.create({
  //   name: 'Day 3 - Router, Classes',
  //   tags: ['Router', 'Classes'],
  //   linkYT: 'https://www.youtube.com/watch?v=dRrQ89wLIoQ&list=PL8NGcSL3ZP--VkdchlqMp0ItHzBp6vb77&index=4',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1sqCBn3A91qAw9geR4vj5kkA7q6GAT8UJDfTiAfwM0jY?format=pdf&name=P3-W1-D3%20-%20Router,%20Classes',
  //   phase: ph3._id,
  //   week: ph3w1._id,
  //   creator: user._id,
  // });
  // const ph3w1day4 = await DayModel.create({
  //   name: 'Day 4 - Redux',
  //   tags: ['Redux'],
  //   linkYT: 'https://www.youtube.com/watch?v=dRrQ89wLIoQ&list=PL8NGcSL3ZP--VkdchlqMp0ItHzBp6vb77&index=4',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1S-fO0P46Oa6SSIXJd4CKauss6C8ckZnM3IqyzJZby3M?format=pdf&name=P3-W1-D4%20-%20Redux',
  //   phase: ph3._id,
  //   week: ph3w1._id,
  //   creator: user._id,
  // });
  // const ph3w2day1 = await DayModel.create({
  //   name: 'Day 1 - Redux Thunk, Redux Saga',
  //   tags: ['Redux', 'Thunk', 'Saga'],
  //   linkYT: 'https://www.youtube.com/watch?v=_c6-NP2zo9w&list=PL8NGcSL3ZP--VkdchlqMp0ItHzBp6vb77&index=6',
  //   linkFile: 'none yet',
  //   linkPres: 'https://elbrus-teaching-plan.herokuapp.com/slide/1t0Zgn3WpexhDaKl-PtuA8ved31nfYo3_9SNeTWeCFlg?format=pdf&name=P3-W2-D1%20-%20Thunk,%20Saga',
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

export async function getDays(weekID) {
  const day = await DayModel.find({ week: weekID });
  return day;
}

export async function getDay(dayID) {
  const day = await DayModel.findOne({ _id: dayID });
  return day;
}

export async function getUser(userID) {
  const user = await DayModel.findOne({ _id: userID });
  return user;
}
export async function getAllDays() {
  const user = await DayModel.find();
  return user;
}
