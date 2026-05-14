import React from "react";
import SignInForm from "./SignInForm";

const SignInPage = () => {
  return (
    <div className="flex p-2 items-center justify-center min-h-screen bg-[#030712]">
      <div className="max-w-xl mx-auto w-full">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
