import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

router.post('/create-student', userControllers.createStudent);
// router.post('/create-faculty');
// router.post('/create-admin');

export const UserRoutes = router;
