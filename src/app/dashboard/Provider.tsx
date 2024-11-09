"use client";

import { UserContext } from "@/context/UserContext";
import { redirect, useRouter } from "next/navigation";
import { ReactNode, useContext } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Provider = ({ children, className }: Props) => {
  const { username } = useContext(UserContext);
  // const router = useRouter();
  console.log(username);

  // redirect to login if user is not logged in
  if (!username) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex relative flex-col md:flex-row gap-1 mt-[3rem] py-5">
      {children}
    </div>
  );
};

export default Provider;
