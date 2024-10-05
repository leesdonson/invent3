import React, { PropsWithChildren } from "react";
import DashboardNavBar from "./DashboardNavBar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex gap-1 mt-[6rem]">
      <div className="w-[20%]">
        <DashboardNavBar />
      </div>
      <div className="w-[80%]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
