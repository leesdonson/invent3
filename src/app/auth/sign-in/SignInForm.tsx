"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Spinner from "@/components/custom/Spinner";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Please enter your email.",
  }),
  password: z.string().min(1, {
    message: "Please enter your password.",
  }),
});

const SignInForm = () => {
  // handle submit
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  //   console.log(form);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 space-y-6 border border-slate-600 rounded-md p-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="border-slate-700"
                  type="email"
                  placeholder="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="border-slate-700"
                  type="password"
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-slate-800 text-sm">
          Don't have an account?
          <Link href="/auth/sign-up" className="text-sky-600">
            {" "}
            Sign Up
          </Link>
        </p>

        <Button type="submit">
          {form.formState.isSubmitting ? <Spinner /> : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
