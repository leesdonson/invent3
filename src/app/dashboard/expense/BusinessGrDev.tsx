"use client";

import React from "react";
import { defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font = {
  size: 16,
};

const BusinessGrDev = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-start py-2">
      <div className="w-full md:w-1/2">
        <p className="text-lg font-semibold text-blue-600">
          Business Growth and Development
        </p>
        <p className="text-md">
          Total amount of business growth and development of the company
        </p>
        <ul className="py-2">
          <li className="">
            Expansion Cost - <span className="font-semibold">K7,200.00</span>
          </li>
          <li className="">
            Franchise Fees - <span className="font-semibold">K10,460.00</span>
          </li>
        </ul>
        <p className="text-xl mb-2 font-semibold text-blue-800">
          Total: K17,660.00
        </p>
      </div>
      <div className="w-full md:w-1/2 p-2 border border-slate-500 rounded-md">
        <Pie
          data={{
            labels: ["Expansion Cost", "Franchise Fees"],
            datasets: [
              {
                label: "Business Growth and Development",
                data: [7200, 10460],
                backgroundColor: [
                  "rgba(7, 11, 240, 0.8)",
                  "rgba(240, 7, 30, 0.8)",
                ],
                borderColor: ["rgba(7, 11, 240, 1)", "rgba(240, 7, 30, 1)"],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Growth and Development",
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

export default BusinessGrDev;
