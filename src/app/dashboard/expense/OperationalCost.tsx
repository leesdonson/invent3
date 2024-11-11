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

const OperationalCost = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-start border-b border-slate-700 py-2">
      <div className="w-full md:w-1/2">
        <p className="text-lg font-semibold text-blue-500">
          Operational Expenses
        </p>
        <ul className="py-2">
          <li>
            Salaries & Wages - <span className="font-semibold">K20,700.00</span>
          </li>
          <li>
            Employee Benefits -{" "}
            <span className="font-semibold">K10,950.00</span>
          </li>
          <li>
            Training Costs - <span className="font-semibold">K8,290.00</span>
          </li>
          <li>
            Maintenance & Repairs -{" "}
            <span className="font-semibold">K5,290.00</span>
          </li>
        </ul>
        <p className="text-xl mb-2 font-semibold text-blue-800">
          Total: K45,230.00
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 border border-slate-500 rounded-md">
        <Bar
          data={{
            labels: ["Salaries ", "Benefits", "Training", "Maintenance"],
            datasets: [
              {
                label: "Operational Costs",
                data: [6700, 10950, 5290, 2290],
                backgroundColor: ["rgba(237, 69, 94, 0.8)"],
                borderColor: ["rgba(237, 69, 94, 0.5)"],
                borderRadius: 5,
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default OperationalCost;
