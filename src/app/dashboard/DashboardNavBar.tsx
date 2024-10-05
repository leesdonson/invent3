import { ChartNoAxesCombinedIcon } from "lucide-react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { PiChartLineDownBold, PiChartLineUpBold } from "react-icons/pi";
import { FaThList } from "react-icons/fa";

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
  return (
    <nav className="flex flex-col border-r border-slate-700 w-full p-1 ">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-md flex items-center gap-2 font-medium hover:bg-gray-600 hover:text-slate-200 transition-all py-1 px-2  text-slate-900"
        >
          <span>{link.icon}</span>
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default DashboardNavBar;
