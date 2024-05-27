import { z } from 'zod';

const userValidationSchema = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be a string',
    })
    .max(20, { message: 'Password can not be more than 20 characters.' })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
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
