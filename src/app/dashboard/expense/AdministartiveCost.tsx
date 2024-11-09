"use client";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = {
  size: 18,
};
defaults.plugins.title.color = "#aaa";

const AdministartiveCost = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-start border-b border-slate-700 py-2">
      <div className="w-full md:w-1/2">
        <p className="text-lg font-semibold text-blue-500">
          Administrative Cost
        </p>
        <ul className="py-2">
          <li>
            Software & Tools - <span className="font-semibold">K5,700.00</span>
          </li>
          <li>
            Licenses and Permits -{" "}
            <span className="font-semibold">K9,950.00</span>
          </li>
          <li>
            Bank Fees - <span className="font-semibold">K2,290.00</span>
          </li>
          <li>
            Professional Services -{" "}
            <span className="font-semibold">K3,990.00</span>
          </li>
        </ul>
        <p className="text-xl mb-2 font-semibold text-blue-800">
          Total: K21,930.00
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 border border-slate-500 rounded-md">
        <Bar
          data={{
            labels: ["Software", "Licenses", "Bank Fees", "Services"],
            datasets: [
              {
                label: "Miscellaneous Costs",
                data: [5700.0, 9950.0, 2290.0, 3990.0],
                backgroundColor: ["rgba(19, 40, 235,0.8)"],
                borderRadius: 5,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default AdministartiveCost;
