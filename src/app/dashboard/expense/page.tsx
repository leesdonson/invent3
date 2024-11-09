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
    <div className="border border-slate-700 rounded-md p-2">
      <p className="text-xl font-semibold text-slate-900">Expenses Tracking</p>
      <InventoryExpances />
      <OperationalCost />
      <MarketingAdvertiseCost />
      <AdministartiveCost />
      <UtilsInfrustructure />
      <Taxes />
      <MiscellenousCost />
      <BusinessGrDev />
    </div>
  );
};

export default ExpensePage;
