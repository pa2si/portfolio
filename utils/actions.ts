'use server';

import { z } from 'zod';
import { FormSchema } from '@/lib/validation/formSchema';
import ContactFormEmail from '@/app/email/ContactFormEmail';
import { Resend } from 'resend';
import React from 'react';

type Inputs = z.infer<typeof FormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);
const myEmail = process.env.MY_EMAIL as string;

export async function sendEmail(data: Inputs) {
  try {
    const result = FormSchema.safeParse(data);

    if (!result.success) {
      console.error('Validation error:', result.error);
      return {
        success: false,
        error: 'Validation failed',
        details: result.error.format(),
        status: 400,
      };
    }

    const { name, senderEmail, message } = result.data;

    // console.log('Form submission success:', { name, senderEmail });

    const emailResult = await resend.emails.send({
      from: 'Portfolio Website <onboarding@resend.dev>',
      to: myEmail,
      subject: 'Email from Portfolio Website',
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });

    // console.log('Email sent:', emailResult);
    return { success: true, data: result.data, status: 200 };
  } catch (error) {
    console.error('Server error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred',
      status: 500,
    };
  }
}
