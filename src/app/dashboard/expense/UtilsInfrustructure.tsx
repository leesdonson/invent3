"use client";

import { defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = {
  size: 18,
};

const UtilsInfrustructure = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-start border-b border-slate-700 py-2">
      <div className="w-full md:w-1/2">
        <p className="text-lg font-semibold text-blue-500">
          Utilities and Infrastructure Cost
        </p>
        <ul className="py-2">
          <li>
            Electricity & Water -{" "}
            <span className="font-semibold">K8,700.00</span>
          </li>
          <li>
            Internet & Phone Services -{" "}
            <span className="font-semibold">K6,250.00</span>
          </li>
          <li>
            Insurance - <span className="font-semibold">K15,290.00</span>
          </li>
        </ul>
        <p className="text-xl mb-2 font-semibold text-blue-800">
          Total: K30,240.00
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 border border-slate-500 rounded-md">
        <Doughnut
          data={{
            labels: ["Electricity", "Internet", "Insurance"],
            datasets: [
              {
                data: [35, 20, 45],
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
                display: true,
                text: "Utils and Infrastructure Cost",
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

export default UtilsInfrustructure;
