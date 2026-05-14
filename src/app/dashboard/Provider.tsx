"use client";

import { UserContext } from "@/context/UserContext";
import { redirect } from "next/navigation";
import { ReactNode, useContext, useEffect } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Provider = ({ children }: Props) => {
  const { username } = useContext(UserContext);

  // redirect to login if user is not logged in
  useEffect(() => {
    if (!username) {
      redirect("/auth/sign-in");
    }
  }, [username]);

  return <div className="flex h-screen w-full overflow-hidden">{children}</div>;
};

export default Provider;
