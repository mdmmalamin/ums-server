import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    // const student = req.body.student;
    const { student: studentData } = req.body;
    // will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(studentData);

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is created successfully.',
      data: result,
    });
  } catch (error) {
    console.log('Student create error: ', error);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();

    // send response
    res.status(200).json({
      success: true,
      message: 'Student is retrieved successfully.',
      data: result,
    });
  } catch (error) {
    console.log('Student create error: ', error);
  }
};

const getOneStudent = async (req: Request, res: Response) => {
  try {
    // const studentId = req.params.studentId;
    const { studentId } = req.params;
    const result = await StudentServices.getOneStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student retrieved successfully.',
      data: result,
    });
  } catch (error) {
    console.log('Get a single student find error: ', error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getOneStudent,
};