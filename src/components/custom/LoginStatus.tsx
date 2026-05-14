"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { toast } from "sonner";
const LoginStatus = () => {
  const { username, setUsername } = useContext(UserContext);

  const handleLogout = () => {
    toast.success("You have successfully logged out.", {
      style: {
        border: "1px solid green",
        padding: "16px",
        color: "green",
      },
    });
    setUsername("");
    window.location.reload();
  };

  return (
    <div className="">
      {username ? (
        <Button
          className="border border-neutral-700 rounded-full"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      ) : (
        <Button className="border border-neutral-700 rounded-full" asChild>
          <Link href="/auth/sign-in">Login</Link>
        </Button>
      )}
    </div>
  );
};

export default LoginStatus;
