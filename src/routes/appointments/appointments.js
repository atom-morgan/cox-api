import express from 'express';
import AppointmentsCtrl from '../../controllers/appointments';

const router = express.Router();

router.route('/')
  .get(AppointmentsCtrl.get)
  .post(AppointmentsCtrl.create);

export default router;