import { Student } from './student.model';

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getOneStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  // const session = await mongoose.startSession();
  // try {
  //   session.startTransaction();
  //   const deletedStudent = await Student.findByIdAndUpdate(
  //     id,
  //     { isDeleted: true },
  //     { new: true, session },
  //   );
  //   if (!deletedStudent) {
  //     throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
  //   }
  //   // get user _id from deletedStudent
  //   const userId = deletedStudent.user;
  //   const deletedUser = await User.findByIdAndUpdate(
  //     userId,
  //     { isDeleted: true },
  //     { new: true, session },
  //   );
  //   if (!deletedUser) {
  //     throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
  //   }
  //   await session.commitTransaction();
  //   await session.endSession();
  //   return deletedStudent;
  // } catch (err) {
  //   await session.abortTransaction();
  //   await session.endSession();
  //   throw new Error('Failed to delete student');
  // }
};

export const StudentServices = {
  getAllStudentFromDB,
  getOneStudentFromDB,
  deleteStudentFromDB,
};
