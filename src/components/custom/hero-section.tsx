"use client";

import { motion } from "motion/react";
import { Lightbulb, ArrowRight, Box } from "lucide-react";
import Footer from "@/app/Footer";
import { useRouter } from "next/navigation";

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
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-transparent z-10" />
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 backdrop-blur-sm">
            <div className="h-64 md:h-96 w-full rounded-lg bg-[#0a0f1d] border border-slate-800/50 flex items-center justify-center">
              <p className="text-slate-600 font-mono text-sm">
                [ Project Visualization Interface ]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};
