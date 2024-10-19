import { z } from 'zod';
import { User_Status } from './user.constant';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .max(20, { message: 'Password can not be more than 20 characters.' })
    .optional(),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum([...User_Status] as [string, ...string[]]),
  }),
});

export const UserValidation = {
  userValidationSchema,
  changeStatusValidationSchema,
};

/*
*
*
id: z.string(), // auto generated

needsPasswordChange: z.boolean().optional().default(true), // don't need

role: z.enum(['student', 'faculty', 'admin']), // set API Endpoint

status: z.enum(['in-progress', 'blocked']).default('in-progress'),

isDeleted: z.boolean().optional().default(false),
*
*
*/
