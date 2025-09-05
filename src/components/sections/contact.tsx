"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import { contactAction } from "@/app/actions/contact";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader, Send } from "lucide-react";
import { Label } from "@/components/ui/label";

const initialState = {
  message: "",
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full md:w-auto" size="lg">
      {pending ? <Loader className="mr-2 h-5 w-5 animate-spin" /> : <Send className="mr-2 h-5 w-5" />}
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function Contact() {
  const [state, formAction] = useFormState(contactAction, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-20 md:py-28 border-t">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Have a question, a project idea, or just want to connect? Feel free to reach out.
          </p>
        </div>

        <form ref={formRef} action={formAction} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" type="text" placeholder="Your Name" required />
              {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="Your message..." className="min-h-40" required />
            {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message[0]}</p>}
          </div>
          <div className="text-center">
            <SubmitButton />
          </div>
        </form>
      </div>
    </section>
  );
}
