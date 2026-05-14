import ProductCard from "./ProductCard";
import { products } from "@/lib/products.data";
// import { fetchProducts } from "@/lib/fetch-products";

const ProductsPage = () => {
  return (
    <div className="h-full w-full overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-50 scrollbar-track-blue-600 p-3">
      <div className="mt-14">
        <span className="text-xl font-semibold bg-neutral-900 border border-red-600  mb-3 w-auto p-2 rounded-full">
          🔥 Hot Selling Products
        </span>
        <p className="mt-4 max-w-2xl text-md">
          Browse through the list of products in your inventory. Click on a
          product to view more details, including pricing, stock levels, and
          descriptions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
