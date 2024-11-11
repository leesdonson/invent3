"use client";

import { UserContext } from "@/context/UserContext";
import { Button } from "../ui/button";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { useContext } from "react";

const Hero = () => {
  const { username } = useContext(UserContext);

  return (
    <div className="flex overflow-hidden relative items-center flex-col justify-center h-screen">
      <div className="h-72 w-72 animate-blob bg-purple-500 rounded-full absolute bottom-[10%] mix-blend-multiply filter blur-2xl -z-10 opacity-55 right-0"></div>
      <div className="h-72 w-72 animate-blob bg-blue-600 rounded-full absolute bottom-[20%] mix-blend-multiply filter blur-2xl -z-10 opacity-55 right-0"></div>
      <div className="h-72 w-72 animate-blob bg-yellow-300 rounded-full absolute bottom-[5%] mix-blend-multiply filter blur-2xl -z-10 opacity-55 right-0"></div>
      <TypographyH1 />
      <p className="text-slate-700 py-4 font-medium text-clip">
        View and manage all your assets in one place.
      </p>
      {username ? (
        <Button asChild>
          <Link href="/dashboard">
            Dashboard
            <FaAnglesRight className="ml-5" size={20} color="white" />
          </Link>
        </Button>
      ) : (
        <div className="flex items-center justify-center z-10 gap-5">
          <Button asChild>
            <Link href="/auth/sign-in">Sign In as Manager</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/sign-up">Get Sign In Credentials</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

const TypographyH1 = () => {
  return (
    <h1 className="scroll-m-20 capitalize text-4xl text-center gradient-heading p-2 font-extrabold tracking-tight lg:text-5xl">
      Monitor your business growth.
    </h1>
  );
};

export default Hero;
