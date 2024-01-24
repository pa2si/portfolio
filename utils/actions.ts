'use server';

import { z } from 'zod';
import { FormSchema } from '@/lib/validation/formSchema';

type Inputs = z.infer<typeof FormSchema>;

export async function addEntry(data: Inputs) {
  try {
    const result = FormSchema.safeParse(data);

    if (result.success) {
      // Log data for debugging, be cautious about sensitive data
      console.log('Form submission success:', data);
      return { success: true, data: result.data, status: 200 };
    } else {
      console.error('Validation error:', result.error);
      return {
        success: false,
        error: 'Validation failed',
        details: result.error.format(),
        status: 400,
      };
    }
  } catch (error) {
    console.error('Server error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred',
      status: 500,
    };
  }
}
