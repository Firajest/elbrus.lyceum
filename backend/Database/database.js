import mongoose from 'mongoose';
import fake from 'faker';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://${process.env.DATABASE_LOGIN}:${process.env.DATABASE_PASSWORD}@lectoryi.pmshi.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`;

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
  name: {
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
  status: {
    type: String,
    required: true,
  },
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
