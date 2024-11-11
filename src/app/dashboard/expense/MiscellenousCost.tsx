"use client";

import { defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = {
  size: 18,
};

const MiscellenousCost = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-start border-b border-slate-700 py-2">
      <div className="w-full md:w-1/2">
        <p className="text-lg font-semibold text-blue-600">
          Miscellaneous Costs
        </p>

        <p className="text-md font-normal">
          Total amount of Miscellaneous Costs{" "}
        </p>
        <ul className="py-2">
          <li>
            Office Supplies - <span className="font-semibold">K6,700.00</span>
          </li>
          <li>
            Security Systems - <span className="font-semibold">K16,950.00</span>
          </li>
          <li>
            Customer Service - <span className="font-semibold">K5,290.00</span>
          </li>
          <li>
            Depreciation - <span className="font-semibold">K2,300.00</span>
          </li>
        </ul>
        <p className="text-xl mb-2 font-semibold text-blue-800">
          Total: K31,240.00
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 border border-slate-500 rounded-md">
        <Bar
          data={{
            labels: [
              "Office Supplies",
              "Security Systems",
              "Customer Service",
              "Depreciation",
            ],
            datasets: [
              {
                label: "Miscellaneous Costs",
                data: [6700.0, 16950.0, 5290.0, 2300.0],
                backgroundColor: ["rgba(231, 19, 235,0.8)"],
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default MiscellenousCost;
