import LoginStatus from "@/components/custom/LoginStatus";
import { Blocks } from "lucide-react";
import Link from "next/link";

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
    <header className="flex items-center bg-[#030712]/30 backdrop-blur-md justify-between fixed top-0 left-0 right-0 z-20 md:px-10 p-2 w-full">
      <div className="">
        <Link className="flex items-center justify-center gap-1" href="/">
          <Blocks className="h-8 w-8 md:h-10 md:w-10" color="blue" />
          <h1 className="md:text-3xl flex bg-linear-to-r from-blue-600 to-red-600 text-transparent bg-clip-text sm:text-2xl text-lg font-bold tracking-tighttranslate-y-1">
            Invent3
          </h1>
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-md bg-slate-800/80 border border-slate-700 text-slate-300 px-3 py-1 rounded-md hover:bg-slate-700/50 transition-colors duration-300"
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
