import LoginStatus from "@/components/custom/LoginStatus";
import { Blocks } from "lucide-react";
import Link from "next/link";
import React from "react";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "About",
    href: "/about",
  },
];
const NavBar = () => {
  return (
    <header className="flex items-center justify-between fixed top-0 left-0 right-0 z-20 gradient p-4 w-full">
      <div className="">
        <Link className="flex items-center gap-0 md:gap-2" href="/">
          <Blocks size={42} color="blue" />
          <h1 className="md:text-3xl sm:text-2xl text-lg font-bold gradient-text translate-y-1">
            Invent3
          </h1>
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-md font-medium cursor-pointer hover:bg-blue-800 transition-all py-1 px-2 rounded-md text-slate-200"
          >
            {link.label}
          </Link>
        ))}
        <LoginStatus />
      </nav>
    </header>
  );
};

export default NavBar;
