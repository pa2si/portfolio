'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormSchema } from '@/lib/validation/formSchema';
import { motion } from 'framer-motion';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { z } from 'zod';
import { Loader } from 'lucide-react';
import { sendEmail } from '@/utils/actions';
import toast from 'react-hot-toast';

const Contact = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      senderEmail: '',
      message: '',
    },
  });

  // 2. Define a submit handler.
  const handleSubmit = async (data: z.infer<typeof FormSchema>) => {
    try {
      const result = await sendEmail(data);

      if (result.success) {
        toast.success('Email sent, thank you!');
        form.reset();
      } else {
        toast.error(`Error: ${result.error || 'Failed to send email'}`);
      }
    } catch (error: any) {
      toast.error('An unexpected error occurred.');
      console.log(error);
    }
  };

  /* animation */
  const slideIn = {
    initial: {
      opacity: 0.3,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-8 mb-12 bg border-2 border-base-200 rounded-lg shadow-lg"
      id="contact"
      variants={slideIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
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
                    className="bg-base-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senderEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="i will reply back to that Email"
                    className="bg-base-100 focus:ring- focus:ring-blue-500"
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
                    className="h-36 bg-base-100"
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
    </motion.div>
  );
};
export default Contact;
