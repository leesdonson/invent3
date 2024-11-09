"use client";

import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = {
  size: 16,
};
defaults.plugins.title.color = "rgb(61, 61, 660)";

const InventoryExpances = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-start border-b border-slate-700 py-2">
      <div className="w-full md:w-1/2">
        <p className="text-lg font-semibold text-blue-500">
          Inventory-Related Expenses
        </p>
        <ul className="py-2">
          <li>
            Cost of Goods Sold (COGS) -{" "}
            <span className="font-semibold">K16,700.00</span>
          </li>
          <li>
            Shipping & Handling -{" "}
            <span className="font-semibold">K6,950.00</span>
          </li>
          <li>
            Storage Costs - <span className="font-semibold">K5,290.00</span>
          </li>
          <li>
            Shrinkage - <span className="font-semibold">K3,290.00</span>
          </li>
        </ul>
        <p className="text-xl mb-2 font-semibold text-blue-800">
          Total: K32,230.00
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 border border-slate-500 rounded-md">
        <Doughnut
          data={{
            labels: ["COGS", "Shipping", "Storage", "Shrinkage"],
            datasets: [
              {
                data: [60, 20, 13, 7],
                backgroundColor: [
                  "rgba(240, 7, 46,0.8)",
                  "rgba(7, 11, 240,0.8)",
                  "rgba(224, 240, 7,0.8)",
                  "rgba(240, 7, 201,0.8)",
                ],
                borderColor: [
                  "rgba(240, 7, 46,0.5)",
                  "rgba(7, 11, 240,0.5)",
                  "rgba(224, 240, 7,0.5)",
                  "rgba(240, 7, 201,0.5)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Inventory-Related Expenses",
                position: "bottom",
                align: "center",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default InventoryExpances;
