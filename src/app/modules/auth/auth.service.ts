import { TLoginUser } from './auth.interface';

const loginUserFromDB = async (payload: TLoginUser) => {
  // const result = await Course.create(payload);
  console.log(payload)
  return {};
};

export const AuthServices = {
  loginUserFromDB,
};
