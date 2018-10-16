import express from 'express';
import Appointments from './appointments';

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.send('Welcome to the API!');
  });

router.use('/appointments', Appointments);

export default router;