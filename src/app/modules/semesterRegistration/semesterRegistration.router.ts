import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.post(
  '/create-semester-registration',
  validateRequest(
    SemesterRegistrationValidation.createSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.createSemesterRegistration,
);

router.get('/:id', SemesterRegistrationController.getOneSemesterRegistrations);

router.patch('/:id', SemesterRegistrationController.updateSemesterRegistration);

router.get(
  '/',
  validateRequest(
    SemesterRegistrationValidation.updateSemesterRegistrationValidationSchema,
  ),
  SemesterRegistrationController.getAllSemesterRegistrations,
);

export const SemesterRegistrationRoutes = router;
