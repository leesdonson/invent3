import { LuBadgeCheck } from "react-icons/lu";

interface Props {
  id: string;
  month: string;
  target: number;
  target_reached: boolean;
  total_quantity_sold: number;
  sold_items: string[];
  total_revenue: number;
  profit_margin: number;
}

const RevenueCard = ({ revenue }: { revenue: Props }) => {
  return (
    <div className="text-slate-900 w-full border border-slate-700 p-2 relative rounded-md ">
      <div className="absolute bottom-0 right-0 p-2  bg-gradient-to-r from-blue-900 via-slate-700 to-blue-900 rounded-br-md ">
        <p className="text-md text-white">
          Target: K{revenue.target.toFixed(2)}{" "}
        </p>
        {revenue.target_reached && (
          <p className="text-xs text-white">
            <LuBadgeCheck size={16} className="inline" color="lightgreen" />{" "}
            Target Reached
          </p>
        )}
      </div>
      <div className="border-b border-slate-700 py-3">
        <p className="text-xl font-semibold text-blue-600">Sales Records</p>
        <span className="text-sm text-slate-700 ">
          Information on each sale, including date, quantity sold, total
          revenue, and payment method
        </span>
        <div className="mt-1 ">
          <p className="text-lg mb-1 font-semibold text-slate-100 w-[8rem] bg-slate-700 py-1 px-2 rounded-md">
            {revenue.month}
          </p>
          <div className="">
            <p className="text-md">
              Total Quantity Sold:{" "}
              <span className="text-blue-600 text-lg">
                {revenue.total_quantity_sold} pcs
              </span>
            </p>
            <p className="text-md">
              Items sold:{" "}
              <span className="block font-semibold">
                {revenue.sold_items.join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-slate-700 py-3">
        <p className="text-xl font-semibold text-blue-600">Total Revenue</p>
        <p className="text-md">Total revenue made from the sales</p>
        <p className="text-xl font-bold mt-2">
          K{revenue.total_revenue.toFixed(2)}
        </p>
      </div>
      <div className="py-3">
        <p className="text-xl font-semibold text-blue-600">Profit Margin</p>
        <p className="text-dm">Total profit made from the sales</p>
        <p className="text-xl font-bold mt-2">
          K{revenue.profit_margin.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default RevenueCard;
