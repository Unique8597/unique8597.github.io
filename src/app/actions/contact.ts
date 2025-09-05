"use server";

import { z } from 'zod';

const schema = z.object({
  name: z.string({ required_error: "Name is required." }).min(2, "Name must be at least 2 characters."),
  email: z.string({ required_error: "Email is required." }).email("Invalid email address."),
  message: z.string({ required_error: "Message is required." }).min(10, "Message must be at least 10 characters."),
});

type State = {
    message: string;
    errors: {
        name?: string[];
        email?: string[];
        message?: string[];
    } | null;
}

export async function contactAction(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });
  
  if (!validatedFields.success) {
    return {
      message: "Please correct the errors and try again.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // In a real app, you would integrate with an email service like Resend or Nodemailer.
  console.log('New contact form submission:', validatedFields.data);

  return {
    message: "Thank you for your message! I'll get back to you soon.",
    errors: null,
  };
}
