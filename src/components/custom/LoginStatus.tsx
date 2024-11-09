"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const LoginStatus = () => {
  const { username, setUsername } = useContext(UserContext);

  const handleLogout = () => {
    setUsername("");
  };

  return (
    <div className="">
      {username ? (
        <Button onClick={handleLogout}>Log Out</Button>
      ) : (
        <Button asChild>
          <Link href="/auth/sign-in">Login</Link>
        </Button>
      )}
    </div>
  );
};

export default LoginStatus;
