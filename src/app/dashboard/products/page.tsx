import ProductCard from "./ProductCard";
import { products } from "@/lib/products.data";
// import { fetchProducts } from "@/lib/fetch-products";

const ProductsPage = () => {
  return (
    <div className="text-slate-900">
      <h1 className="text-xl font-semibold">Products Page</h1>
      <div className="grid grid-cols-auth-fit gap-3 mt-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
