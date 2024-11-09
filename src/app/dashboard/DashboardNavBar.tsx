"use client";

import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { PiChartLineDownBold, PiChartLineUpBold } from "react-icons/pi";
import { FaThList } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <MdDashboard size={20} />,
  },
  {
    label: "Products",
    href: "/dashboard/products",
    icon: <FaThList size={20} />,
  },
  {
    label: "Revenue",
    href: "/dashboard/revenue",
    icon: <PiChartLineUpBold size={20} />,
  },
  {
    label: "Expense",
    href: "/dashboard/expense",
    icon: <PiChartLineDownBold size={20} />,
  },
];
const DashboardNavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-col sticky top-[5rem] z-40">
      <div className="relative w-full flex flex-col z-10">
        <nav
          className={
            open
              ? "mobile active bg-black w-1/2"
              : "flex mobile w-full flex-col mt-2"
          }
        >
          {links.map((link) => (
            <Link
              onClick={() => setOpen(false)}
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-md flex items-center gap-2 font-medium bg-blue-700 text-slate-200 transition-all py-1 px-2"
                  : `text-md flex items-center gap-2 font-medium hover:bg-red-700 text-slate-300 transition-all py-1 px-2`
              }
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="text-md md:hidden absolute top-2 right-0 flex items-center gap-2 font-medium bg-blue-800 hover:bg-blue-900 text-slate-300 transition-all py-1 px-2"
        >
          <BiMenuAltRight size={20} />
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </div>
  );
};

export default DashboardNavBar;
