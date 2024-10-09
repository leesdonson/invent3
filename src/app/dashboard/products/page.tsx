import React from "react";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="text-slate-900">
      <h1 className="text-4xl">Products Page</h1>
      <div className="grid grid-cols-auth-fit gap-3 mt-5">
        {products.map((product) => (
          <ProductCard key={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
