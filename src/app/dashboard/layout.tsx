import React, { PropsWithChildren } from "react";
import DashboardNavBar from "./DashboardNavBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invent3 - Dashboard",
  description: "Inventory Management App",
};

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex gap-1 mt-[4rem] py-5">
      <div className="w-[20%]">
        <DashboardNavBar />
      </div>
      <div className="w-[80%]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
