"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Spinner from "@/components/custom/Spinner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const formSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Please enter username.",
    })
    .min(4),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

const SignInForm = () => {
  const router = useRouter();
  const { setUsername } = useContext(UserContext);
  // handle submit
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  //   console.log(form);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (!values)
      toast.error("Please fill in the form correctly.", {
        style: {
          border: "1px solid red",
          padding: "16px",
          color: "red",
        },
      });

    if (values.username !== "invent3" || values.password !== "manager3") {
      return toast.error("Invalid username or password.", {
        style: {
          border: "1px solid red",
          padding: "16px",
          color: "red",
        },
      });
    }

    setUsername(values.username);

    toast.success("You have successfully signed in.", {
      style: {
        border: "1px solid green",
        padding: "16px",
        color: "green",
      },
    });

    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full text-neutral-200 border border-slate-700 p-5 rounded-xl bg-[#0a0f1d]"
      >
        <p className="text-3xl font-bold py-5 w-full text-center">
          Welcome back!
        </p>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="text-lg font-heading">Username</FormLabel>
              <FormControl>
                <Input
                  className="border-slate-500 text-lg w-full p-3 rounded font-semibold"
                  type="text"
                  placeholder="username"
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
            <FormItem className="mb-4">
              <FormLabel className="text-lg font-heading">Password</FormLabel>
              <FormControl>
                <Input
                  className="border-slate-500 text-lg w-full p-3 rounded font-semibold"
                  type="password"
                  placeholder="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-slate-100 mb-5 text-base">
          Don&#39;t have Sign in Credentials?
          <Link href="/auth/sign-up" className="text-sky-600">
            {" "}
            Get Now
          </Link>
        </p>

        <Button
          type="submit"
          className="w-full text-lg font-semibold bg-green-600 p-2 rounded-md text-white hover:bg-green-700 transition-colors duration-300 block text-center"
        >
          {form.formState.isSubmitting ? <Spinner /> : "Login"}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
