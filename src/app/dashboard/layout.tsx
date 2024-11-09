import { PropsWithChildren } from "react";
import DashboardNavBar from "./DashboardNavBar";
import { Metadata } from "next";
import Provider from "./Provider";

export const metadata: Metadata = {
  title: "Invent3 - Dashboard",
  description: "Inventory Management App",
};

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <Provider>
      <div className="w-full relative md:w-[20%] bg-blue-950">
        <DashboardNavBar />
      </div>
      <div className="w-full p-2 md:w-[80%] bg-gradient">{children}</div>
    </Provider>
  );
};

export default DashboardLayout;
