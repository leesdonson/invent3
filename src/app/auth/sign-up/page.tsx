import Link from "next/link";
import React from "react";
// import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div className="mt-[6rem] container mx-auto py-5 w-full flex flex-col h-screen items-center justify-start">
      <h2 className="text-xl font-bold text-slate-700 m-3">
        Sign in Credentials
      </h2>
      <p className="text-slate-600 py-2">
        Use the username and password provided below to login to the app.
      </p>
      <div className="border border-slate-700 flex flex-col gap-6 rounded-md p-2 w-1/2">
        <div className="flex flex-col">
          <p className="text-xl">Username:</p>
          <p className="bg-slate-600 p-2 rounded-md text-white">invent3</p>
        </div>
        <div className="flex flex-col">
          <p className="text-xl">Password:</p>
          <p className="bg-slate-600 p-2 rounded-md text-white">manager3</p>
        </div>
      </div>
      <Link
        className="mt-4 text-blue-600 font-medium underline"
        href="/auth/sign-in"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default SignUpPage;
