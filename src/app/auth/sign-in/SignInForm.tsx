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
import { toast } from "@/hooks/use-toast";
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
    if (!values) {
      return toast({
        title: "Error",
        description: "Please enter username and password.",
        variant: "destructive",
      });
    }

    if (values.username !== "invent3" || values.password !== "manager3") {
      return toast({
        title: "Error",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }

    setUsername(values.username);

    toast({
      title: "Success",
      description: "You have successfully signed in.",
      variant: "default",
    });

    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 space-y-6 border border-slate-600 rounded-md p-5"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  className="border-slate-700"
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
          Don&#39;t have Sign in Credentials?
          <Link href="/auth/sign-up" className="text-sky-600">
            {" "}
            Get Now
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
