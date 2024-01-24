'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormSchema } from '@/lib/validation/formSchema';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { Loader } from 'lucide-react';
import { addEntry } from '@/utils/actions';
import toast from 'react-hot-toast';

const Contact = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const response = await addEntry(data);

      if (response.success) {
        toast.success('Form submitted successfully!');
        form.reset();
      } else {
        toast.error(`Error: ${response.error}`);
      }
    } catch (error: any) {
      toast.error('An unexpected error occurred.');
      console.log(error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-5 mb-12 " id="contact">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Whats your name?"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="i will reply back to that Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="How can i help you?"
                    className="h-36"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <div className="flex justify-center items-center gap-2">
                  Submitting...
                  <Loader className="animate-spin" />
                </div>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default Contact;
