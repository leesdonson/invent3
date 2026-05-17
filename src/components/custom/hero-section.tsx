"use client";

import { motion } from "motion/react";
import {
  Lightbulb,
  ArrowRight,
  Box,
  Blocks,
  SquareChartGantt,
  HandCoins,
  CircleDollarSign,
  Users,
} from "lucide-react";
import Footer from "@/app/Footer";
import { useRouter } from "next/navigation";

const dashboardTabs = [
  {
    label: "Products",
    href: "/dashboard/products",
    icon: <Box size={20} />,
  },
  {
    label: "Ideas",
    href: "/dashboard/ideas",
    icon: <Lightbulb size={20} />,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: <SquareChartGantt size={20} />,
  },
  {
    label: "Revenue",
    href: "/dashboard/revenue",
    icon: <HandCoins size={20} />,
  },
  {
    label: "Expense",
    href: "/dashboard/expense",
    icon: <CircleDollarSign size={20} />,
  },
  {
    label: "Customers",
    href: "/dashboard/customers",
    icon: <Users size={20} />,
  },
];

export const HeroSection = () => {
  const router = useRouter();
  const navigate = (route: string) => router.push(route);
  return (
    <section className="relative flex-col min-h-screen w-full bg-[#030712] flex items-center justify-center overflow-hidden px-6">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-md text-slate-400 text-sm mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          V1.0 Now in Alpha
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white tracking-tight mb-6"
        >
          Turning{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
            "What if?"
          </span>{" "}
          <br />
          into "What's Next."
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed mb-10"
        >
          Invent3 is the central hub for industrial-grade imagination. Bridge
          the gap between fleeting ideas and finalized prototypes with our
          integrated inventor management suite.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:pr-12"
            onClick={() => navigate("/dashboard/products")}
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Inventing <Lightbulb size={18} />
            </span>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
              <ArrowRight size={20} />
            </div>
          </button>

          <button
            className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-xl border border-slate-800 hover:bg-slate-800 transition-colors flex items-center gap-2"
            onClick={() => navigate("/dashboard")}
          >
            <Box size={18} className="text-blue-400" />
            View Lab Dashboard
          </button>
        </motion.div>

        {/* Subtle Visual Hook */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-15 relative"
        >
          <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-transparent  z-20" />
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-sm">
            <div className="h-64 md:h-96 w-full rounded-lg bg-[#0a0f1d]  flex items-center justify-center gap-1">
              <div className="flex-1 hidden md:block bg-neutral-800 border rounded-lg p-2 border-slate-800/50 h-full">
                {/* header */}
                <div className="flex items-center gap-2 mb-2">
                  <Blocks className="h-5 w-5" color="blue" />
                  <h2 className="text-sm font-bold text-white tracking-tight">
                    Invent3 Lab
                  </h2>
                </div>
                <p className="text-muted-foreground">Admin Dashboard.</p>
                <div className="z-40 mt-4">
                  {dashboardTabs.map((tab) => (
                    <div
                      key={tab.href}
                      className="flex border border-slate-700 items-center gap-2 mt-4 p-2 hover rounded-md hover:bg-red-500 cursor-pointer transition-colors"
                    >
                      {tab.icon}
                      <span className="text-sm text-slate-300">
                        {tab.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-5 bg-slate-800 h-full overflow-hidden rounded-lg p-2 border border-slate-800/50">
                <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                  {/* products */}
                  <div className="visual-dashboard">
                    {/* header */}
                    <div className="flex items-center justify-between mb-2 p-2">
                      Total Products
                      <span className="text-sm text-slate-400 ml-2">
                        +5% from last month
                      </span>
                    </div>
                    {/* content */}
                    <div className="p-2 text-white">
                      <p className="text-xl py-4 font-extrabold text-blue-600">
                        +1,389
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                          Sold Items:{" "}
                          <span className="text-blue-600">1,389</span>{" "}
                        </div>
                        <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                          In Stock: <span className="text-green-500">389</span>
                        </div>
                        <div className="bg-red-500/20 text-red-500 px-2 py-1 rounded-md">
                          Out of Stock:{" "}
                          <span className="text-red-500">1,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ideas */}
                  <div className="visual-dashboard">
                    {/* header */}
                    <div className="flex items-center justify-between mb-2 p-2">
                      Total Ideas
                      <span className="text-sm text-slate-400 ml-2">
                        +12% from last month
                      </span>
                    </div>
                    {/* content */}
                    <div className="p-2 text-white">
                      <p className="text-xl py-4 font-extrabold text-blue-600">
                        +3,245
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                          Approved:{" "}
                          <span className="text-green-500">1,200</span>
                        </div>
                        <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                          Under Review:{" "}
                          <span className="text-blue-500">1,500</span>
                        </div>
                        <div className="bg-red-500/20 text-red-500 px-2 py-1 rounded-md">
                          Rejected: <span className="text-red-500">545</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* projects */}
                  <div className="visual-dashboard">
                    {/* header */}
                    <div className="flex items-center justify-between mb-2 p-2">
                      Total Projects
                      <span className="text-sm text-slate-400 ml-2">
                        +8% from last month
                      </span>
                    </div>
                    {/* content */}
                    <div className="p-2 text-white">
                      <p className="text-xl py-4 font-extrabold text-blue-600">
                        +2,389
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                          Completed:{" "}
                          <span className="text-green-500">1,389</span>
                        </div>
                        <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                          In Progress:{" "}
                          <span className="text-blue-500">389</span>
                        </div>
                        <div className="bg-red-500/20 text-red-500 px-2 py-1 rounded-md">
                          Pending: <span className="text-red-500">1,000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* revenue */}
                  <div className="visual-dashboard">
                    {/* header */}
                    <div className="flex items-center justify-between mb-2 p-2">
                      Total Revenue
                      <span className="text-sm text-slate-400 ml-2">
                        +20% from last month
                      </span>
                    </div>
                    {/* content */}
                    <div className="p-2 text-white">
                      <p className="text-xl py-4 font-extrabold text-blue-600">
                        +$1.2M
                      </p>
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                          Online: <span className="text-green-500">$800K</span>
                        </div>
                        <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                          In-store: <span className="text-blue-500">$400K</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="visual-dashboard">expense</div>
                  <div className="visual-dashboard">customers</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};
