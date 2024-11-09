import React from "react";

const Dashboard = () => {
  return (
    <div className="text-slate-900 relative h-screen z-10">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-700">
        Dashboard
      </h1>
      <h2 className="text-3xl font-bold absolute top-0 left-[8rem] bg-yellow-400 rounded-full p-1 w-10 h-10 text-center">
        !
      </h2>
      <p className="text-md text-slate-800 w-full md:w-1/2 mt-4 border border-slate-700 rounded-md p-2">
        This page is still under development, data is temporarilly unavailable.
        As soon as the site is updated, changes will be reflected immediately.
      </p>
      <p className="text-md md:hidden text-slate-800 w-full md:w-1/2 mt-4 font-bold border border-slate-700 rounded-md p-2">
        Please click the menu on the top right to see more pages.
      </p>
    </div>
  );
};

export default Dashboard;
