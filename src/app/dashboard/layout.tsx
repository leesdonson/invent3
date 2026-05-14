import { PropsWithChildren } from "react";
import DashboardNavBar from "./DashboardNavBar";
import { Metadata } from "next";
import Provider from "./Provider";
import { MdDashboard } from "react-icons/md";
import { PiChartLineDownBold, PiChartLineUpBold } from "react-icons/pi";
import { FaThList } from "react-icons/fa";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Invent3 - Dashboard",
  description: "Inventory Management App",
};

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

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <Provider>
      <div className="flex w-full bg-[#000000] gap-3 p-2">
        {/* <DashboardNavBar /> */}
        <div className="flex-1 hidden md:block border border-neutral-600 p-3 rounded-lg">
          <div className="flex h-full w-full flex-col gap-5">
            <h1 className="text-xl mt-14  font-base tracking-tight">
              Dashboard Menu
            </h1>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className="text-md flex items-center hover:bg-slate-800 gap-2 font-medium bg-slate-900 border border-neutral-700 text-slate-200 transition-all py-1 px-2 rounded-md"
                >
                  <span>{link.icon}</span>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="text-neutral-200 w-full flex-5 border border-neutral-600 rounded-lg">
          {children}
        </div>
      </div>
    </Provider>
  );
};

export default DashboardLayout;
