"use client";

import { defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = {
  size: 16,
};

const Taxes = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-start border-b border-slate-700 py-2">
      <div className="w-full md:w-1/2">
        <p className="text-lg font-semibold text-blue-600">Taxes</p>
        <ul className="py-2">
          <li>
            Sales Tax - <span className="font-semibold">K6,700.00</span>
          </li>
          <li>
            Income Tax - <span className="font-semibold">K8,950.00</span>
          </li>
          <li>
            Payroll Taxes - <span className="font-semibold">K5,290.00</span>
          </li>
        </ul>
        <p className="text-xl mb-2 font-semibold text-blue-800">
          Total: K20,940.00
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 border border-slate-500 rounded-md">
        <Doughnut
          data={{
            labels: ["Sales Tax", "Income Tax", "Payroll Taxes"],
            datasets: [
              {
                data: [60, 40, 20],
                backgroundColor: [
                  "rgba(240, 7, 46,0.8)",
                  "rgba(7, 11, 240,0.8)",
                  "rgba(224, 240, 7,0.8)",
                ],
                borderColor: [
                  "rgba(240, 7, 46,0.5)",
                  "rgba(7, 11, 240,0.5)",
                  "rgba(224, 240, 7,0.5)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Taxes",
                position: "bottom",
                align: "center",
                color: "rgb(61, 61, 660)",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Taxes;
