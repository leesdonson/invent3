const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center relative h-screen z-10">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>

      <p className="text-md  w-full md:w-1/2 mt-4 border border-slate-700 rounded-md p-2">
        This page is still under development, data is temporarilly unavailable.
        As soon as the site is updated, changes will be reflected immediately.
      </p>
      <p className="text-md md:hidden w-full md:w-1/2 mt-4 font-bold border border-slate-700 rounded-md p-2">
        Please click the menu on the top right to see more pages.
      </p>
    </div>
  );
};

export default Dashboard;
