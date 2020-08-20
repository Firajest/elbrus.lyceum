/* eslint-disable import/extensions */
/* eslint-disable no-underscore-dangle */
import express from 'express';
import {
  DayModel, UserModel,
  getPh, getWeek, getDays, getDay, getAllDays,
} from '../Database/database.js';

const route = express.Router();

route.get('/phases', async (req, res) => {
  const phases = await getPh();
  res.json({ phases });
});

route.get('/phases/:id', async (req, res) => {
  const { id } = req.params;
  const weeks = await getWeek(id);
  res.json({ weeks });
});

route.get('/week/:id', async (req, res) => {
  const { id } = req.params;
  const days = await getDays(id);
  res.json({ days });
});

route.get('/day/:id', async (req, res) => {
  const { id } = req.params;
  const day = await getDay(id);
  res.json({ day });
});

route.get('/alldays', async (req, res) => {
  const allDays = await getAllDays();
  res.json({ allDays });
});

route.put('/newMaterials', async (req, res) => {
  try {
    const {
      lection, presentation, code, day,
    } = req.body;
    const currentAdmin = await UserModel.findOne({ _id: req.session.user._id });
    const dbDay = await DayModel.findOne({ _id: day });
    if (currentAdmin.status === ('chieftain' || 'teacher')) {
      dbDay.newLink.push({
        name: currentAdmin.name,
        linkYT: lection,
        linkFile: code,
        linkPres: presentation,
      });
      await dbDay.save();
      res.json({ message: 'Materials has been added' });
    } else res.json({ errorMessage: 'Something went wrong' });
  } catch {
    res.json({ errorMessage: 'Something wrong with info' });
  }
});

export default route;
