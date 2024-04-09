import * as z from 'zod';

export const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Please provide real name' })
    .max(50, { message: 'Name is too long' }),
  senderEmail: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Invalid Email')
    .max(254, { message: 'Email is too long' }),
  message: z
    .string()
    .min(3, { message: 'Oops, that was too short' })
    .max(2200, { message: 'Message is too long' }),
  agreeToTerms: z
    .boolean()
    .default(false)
    .refine((val) => val === true, 'You must agree to the terms to proceed'),
});
