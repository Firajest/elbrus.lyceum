import express from 'express';
import { PhaseModel, WeekModel, DayModel } from '../Database/database.js';

const route = express.Router();

route.get('/phases', async (req, res) => {
  const phases = await PhaseModel.find();
  res.json({ phases });
});

route.get('/phases/:id', async (req, res) => {
  const { id } = req.params;
  const weeks = WeekModel.find({ phase: id });
  res.json({ weeks });
});

route.get('/week/:id', async (req, res) => {
  const { id } = req.params;
  const days = DayModel.find({ week: id });
  res.json({ days });
});

route.get('/day/:id', async (req, res) => {
  const { id } = req.params;
  const day = DayModel.find({ _id: id });
  res.json({ day });
});

export default route;
