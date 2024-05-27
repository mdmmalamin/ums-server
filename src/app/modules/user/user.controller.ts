import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodPassedData = studentValidationSchema.parse(studentData)

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );

    // send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created successfully.',
      data: result,
    });
  } catch (error) {
    // send response
    next(error);
  }
};

export const userControllers = {
  createStudent,
};
