import InventoryExpances from "./InventoryExpances";
import OperationalCost from "./OperationalCost";
import MarketingAdvertiseCost from "./MarketingAdvertiseCost";
import AdministartiveCost from "./AdministartiveCost";
import UtilsInfrustructure from "./UtilsInfrustructure";
import Taxes from "./Taxes";
import MiscellenousCost from "./MiscellenousCost";
import BusinessGrDev from "./BusinessGrDev";

const ExpensePage = () => {
  return (
    <div className="h-full w-full overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-50 scrollbar-track-blue-600 p-3">
      <div className="mt-14 bg-neutral-900 border border-neutral-800  mb-3 w-auto p-2 rounded-lg">
        <h1 className="text-xl py-5 font-bold">Expenses Tracking</h1>
      </div>
      <div className="flex flex-col gap-4">
        <InventoryExpances />
        <OperationalCost />
        <MarketingAdvertiseCost />
        <AdministartiveCost />
        <UtilsInfrustructure />
        <Taxes />
        <MiscellenousCost />
        <BusinessGrDev />
      </div>
    </div>
  );
};

export default ExpensePage;
