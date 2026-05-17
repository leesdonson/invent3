const Dashboard = () => {
  return (
    <div className="flex-5 bg-[#000000] h-full overflow-y-auto rounded-lg p-2 border border-slate-800/50">
      {/* main header */}
      <div className="mt-20 border-b border-slate-700 mb-4">
        <h2 className="text-2xl font-bold text-white mb-2">
          Welcome Back, Inventor!
        </h2>
        <p className="text-slate-400 mb-4">
          Here's a quick overview of your dashboard. Check out the latest stats
          and updates on your projects, products, and ideas.
        </p>
      </div>
      {/* main content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* products */}
        <div className="visual-dashboard">
          {/* header */}
          <div className="flex items-center justify-between mb-2 p-2">
            Total Products
            <span className="text-sm text-slate-400 ml-2">
              +5% from last month
            </span>
          </div>
          {/* content */}
          <div className="p-2 text-white">
            <p className="visual-text-dashboard">+1,389</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                Sold Items: <span className="text-blue-600">1,389</span>{" "}
              </div>
              <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                In Stock: <span className="text-green-500">389</span>
              </div>
              <div className="bg-red-500/20 text-red-500 px-2 py-1 rounded-md">
                Out of Stock: <span className="text-red-500">1,000</span>
              </div>
            </div>
          </div>
        </div>
        {/* ideas */}
        <div className="visual-dashboard">
          {/* header */}
          <div className="flex items-center justify-between mb-2 p-2">
            Total Ideas
            <span className="text-sm text-slate-400 ml-2">
              +12% from last month
            </span>
          </div>
          {/* content */}
          <div className="p-2 text-white">
            <p className="visual-text-dashboard">+3,245</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                Approved: <span className="text-green-500">1,200</span>
              </div>
              <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                Under Review: <span className="text-blue-500">1,500</span>
              </div>
              <div className="bg-red-500/20 text-red-500 px-2 py-1 rounded-md">
                Rejected: <span className="text-red-500">545</span>
              </div>
            </div>
          </div>
        </div>
        {/* projects */}
        <div className="visual-dashboard">
          {/* header */}
          <div className="flex items-center justify-between mb-2 p-2">
            Total Projects
            <span className="text-sm text-slate-400 ml-2">
              +8% from last month
            </span>
          </div>
          {/* content */}
          <div className="p-2 text-white">
            <p className="visual-text-dashboard">+2,389</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                Completed: <span className="text-green-500">1,389</span>
              </div>
              <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                In Progress: <span className="text-blue-500">389</span>
              </div>
              <div className="bg-red-500/20 text-red-500 px-2 py-1 rounded-md">
                Pending: <span className="text-red-500">1,000</span>
              </div>
            </div>
          </div>
        </div>
        {/* revenue */}
        <div className="visual-dashboard">
          {/* header */}
          <div className="flex items-center justify-between mb-2 p-2">
            Total Revenue
            <span className="text-sm text-slate-400 ml-2">
              +20% from last month
            </span>
          </div>
          {/* content */}
          <div className="p-2 text-white">
            <p className="visual-text-dashboard">+$1.2M</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                Online: <span className="text-green-500">$800K</span>
              </div>
              <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                In-store: <span className="text-blue-500">$400K</span>
              </div>
            </div>
          </div>
        </div>
        {/* expense */}
        <div className="visual-dashboard">
          {/* header */}
          <div className="flex items-center justify-between mb-2 p-2">
            Total Expenses
            <span className="text-sm text-slate-400 ml-2">
              +10% from last month
            </span>
          </div>
          {/* content */}
          <div className="p-2 text-white">
            <p className="visual-text-dashboard">+$800K</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                Operational: <span className="text-green-500">$500K</span>
              </div>
              <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                Marketing: <span className="text-blue-500">$300K</span>
              </div>
            </div>
          </div>
        </div>
        {/* customers */}
        <div className="visual-dashboard">
          {/* header */}
          <div className="flex items-center justify-between mb-2 p-2">
            Total Customers
            <span className="text-sm text-slate-400 ml-2">
              +15% from last month
            </span>
          </div>
          {/* content */}
          <div className="p-2 text-white">
            <p className="visual-text-dashboard">+5,000</p>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <div className="bg-green-500/20 text-green-500 px-2 py-1 rounded-md">
                New: <span className="text-green-500">3,000</span>
              </div>
              <div className="bg-blue-500/20 text-blue-500 px-2 py-1 rounded-md">
                Returning: <span className="text-blue-500">2,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
