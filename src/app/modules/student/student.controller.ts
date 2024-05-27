import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    // send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Students is retrieved successfully.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getOneStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // const studentId = req.params.studentId;
    const { studentId } = req.params;
    const result = await StudentServices.getOneStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved successfully.',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted successfully.',
      data: '',
      // data: result
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getOneStudent,
};
