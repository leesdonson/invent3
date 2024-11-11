"use client";

import { defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = {
  size: 16,
};
defaults.plugins.title.color = "rgb(61, 61, 660)";

const MarketingAdvertiseCost = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-start border-b border-slate-700 py-2">
      <div className="w-full md:w-1/2">
        <p className="text-lg font-semibold text-blue-500">
          Marketing and Advertising
        </p>
        <ul className="py-2">
          <li>
            Online Advertising -{" "}
            <span className="font-semibold">K3,500.00</span>
          </li>
          <li>
            Traditional Advertising -{" "}
            <span className="font-semibold">K4,950.00</span>
          </li>
          <li>
            Promotions & Discounts -{" "}
            <span className="font-semibold">K6,000.00</span>
          </li>
          <li>
            Website maintenance -{" "}
            <span className="font-semibold">K3,290.00</span>
          </li>
        </ul>
        <p className="text-xl mb-2 font-semibold text-blue-800">
          Total: K17,230.00
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 border border-slate-500 rounded-md">
        <Pie
          data={{
            labels: ["Online Ads", "Traditional Ads", "Promotions ", "Website"],
            datasets: [
              {
                label: "Marketing & Advertising",
                data: [3.5, 4.95, 3.29, 6.0],
                backgroundColor: [
                  "rgba(240, 7, 46,0.8)",
                  "rgba(19, 7, 240,0.8)",
                  "rgba(240, 7, 209,0.8)",
                  "rgba(240, 220, 7,0.8)",
                ],
                borderColor: [
                  "rgba(240, 7, 46,0.5)",
                  "rgba(19, 7, 240,0.5)",
                  "rgba(240, 7, 209,0.5)",
                  "rgba(240, 220, 7,0.5)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Marketing & Advertising",
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

export default MarketingAdvertiseCost;
