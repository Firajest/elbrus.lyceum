import express from 'express';
import {
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

export default route;
