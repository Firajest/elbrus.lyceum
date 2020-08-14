import express from 'express';
import {
  getPh, getWeek, getDays, getDay,
} from '../Database/database';

const route = express.Router();

route.get('/phases', async (req, res) => {
  const phases = getPh();
  res.json({ phases });
});

route.get('/phases/:id', async (req, res) => {
  const { id } = req.params;
  const weeks = getWeek(id);
  res.json({ weeks });
});

route.get('/week/:id', async (req, res) => {
  const { id } = req.params;
  const days = getDays(id);
  res.json({ days });
});

route.get('/day/:id', async (req, res) => {
  const { id } = req.params;
  const day = getDay(id);
  res.json({ day });
});

export default route;
