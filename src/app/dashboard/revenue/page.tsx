"use client";

import { Chart as ChartJS, LineElement, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import revenueData from "@/lib/revenue-data.json";
import RevenueCard from "./RevenueCard";
import { revenueData as revenueSummary } from "@/lib/revenue-summary";
import revenueReport from "@/lib/revenue-report.json";
import { useState } from "react";

ChartJS.register(LineElement);

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = {
  size: 20,
};
defaults.plugins.title.color = "#000000";

const RevenuePage = () => {
  const [month, setMonth] = useState("January");

  const revenue = revenueReport.filter((r) => r.month === month)[0];

  const data = revenueData;
  return (
    <div className="text-slate-900 p-2 w-full flex items-start justify-center flex-col gap-3">
      <h1 className="text-xl py-5 font-bold">Sales and Revenue Tracking.</h1>
      <div className="text-slate-900 border border-slate-700 p-4 w-full rounded-md">
        <Line
          data={{
            labels: data.map((d) => d.label),
            datasets: [
              {
                label: "Revenue",
                data: data.map((d) => d.revenue),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
              {
                label: "Target",
                data: data.map((d) => d.target),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue vs. Target 2024",
              },
            },
          }}
        />
      </div>
      <div className="w-full">
        <div className="py-1 flex items-start justify-between">
          <div className="">
            <p className="text-xl font-semibold p-1">Summary</p>
            <p className="text-sm p-1">
              This is the summary of sales and revenue for each month.
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <select
              onChange={(e) => setMonth(e.target.value)}
              value={month}
              name="month"
              id="month"
              className="w-full placeholder:text-slate-400 outline-none border border-slate-700 p-1 bg-slate-800 text-sm text-slate-100 cursor-pointer"
            >
              <option value="" disabled={true}>
                Select a month
              </option>
              {revenueReport.map((d: any) => (
                <option key={d.id} value={d.month}>
                  {d.month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3">
          <RevenueCard revenue={revenue} />
        </div>
      </div>
    </div>
  );
};

export default RevenuePage;
