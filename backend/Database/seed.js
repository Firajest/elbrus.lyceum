import bcrypt from 'bcrypt';
import {
  UserModel, PhaseModel, WeekModel, DayModel,
} from './database';

const saltRounds = 10;

async function addPhW() {
  const ph1 = await PhaseModel.create({ name: 'Phase 1' });
  const ph2 = await PhaseModel.create({ name: 'Phase 2' });
  const ph3 = await PhaseModel.create({ name: 'Phase 3' });
  const ph = await PhaseModel.find();
  const ph1w1 = await WeekModel.create({ name: 'Week 1', phase: ph1._id });
  const ph1w2 = await WeekModel.create({ name: 'Week 2', phase: ph1._id });
  const ph1w3 = await WeekModel.create({ name: 'Week 3', phase: ph1._id });
  const ph2w1 = await WeekModel.create({ name: 'Week 1', phase: ph2._id });
  const ph2w2 = await WeekModel.create({ name: 'Week 2', phase: ph2._id });
  const ph2w3 = await WeekModel.create({ name: 'Week 3', phase: ph2._id });
  const ph3w1 = await WeekModel.create({ name: 'Week 1', phase: ph3._id });
  const ph3w2 = await WeekModel.create({ name: 'Week 2', phase: ph3._id });
  const ph3w3 = await WeekModel.create({ name: 'Week 3', phase: ph3._id });
  const user = await UserModel.create({
    name: 'admin', email: 'boma385@gmail.com', password: bcrypt.hash('admin', saltRounds), status: 'chieftain',
  });
  // const ph1w1day1 = await DayModel.create({ name: 'Day 1 - DOM Events' });
}

addPhW();
