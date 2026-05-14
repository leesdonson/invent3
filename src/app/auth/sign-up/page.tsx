import Link from "next/link";
import React from "react";
// import SignUpForm from "./SignUpForm";

const SignUpPage = () => {
  return (
    <div className="flex p-2 items-center justify-center text-neutral-200 min-h-screen bg-[#030712]">
      <div className="max-w-xl mx-auto w-full border border-slate-700 rounded-xl p-5 bg-[#0a0f1d]">
        <h2 className="text-xl font-bold m-3">Sign in Credentials</h2>
        <p className="text-lg py-2">
          Use the username and password provided below to login to the app.
        </p>
        <div className="border mb-5 border-slate-700 flex flex-col gap-6 rounded-md p-2 w-full">
          <div className="flex flex-col">
            <p className="text-xl">Username:</p>
            <p className="bg-slate-700 p-2 rounded text-lg font-semibold text-white">
              invent3
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-xl">Password:</p>
            <p className="bg-slate-700 p-2 rounded text-lg font-semibold text-white">
              manager3
            </p>
          </div>
        </div>
        <Link
          className="mt-4 bg-green-600 p-2 rounded-md font-medium text-white hover:bg-green-700 transition-colors duration-300 block text-center"
          href="/auth/sign-in"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
