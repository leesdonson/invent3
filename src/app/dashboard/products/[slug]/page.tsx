"use client";

import React from "react";
import { products } from "@/lib/products.data";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProductDetailPage = ({ params }: { params: { slug: string } }) => {
  const product = products.find((p) => p.slug === params.slug)!;
  return (
    <div className="w-full relative py-3 px-[5px]">
      <Button
        onClick={() => window.history.back()}
        className="absolute top-1 left-2"
      >
        Back
      </Button>
      <p className="text-xl font-bold text-slate-700 py-3 text-center capitalize">
        Product details.
      </p>
      <div className="flex items-start justify-center w-full flex-col md:flex-row gap-3">
        <div className="w-full md:w-1/2 h-[300px] relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="100%"
            className="rounded-md object-contain p-1"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="">
            <h1 className="text-xl font-bold bg-slate-500 text-slate-200 p-1 rounded-md text-center">
              {product.name}
            </h1>
            <div className="mt-3 border border-slate-700 p-2 rounded-md">
              <p className="text-md font-bold text-slate-700">
                Prduct ID:{" "}
                <span className="font-normal text-xl">{product.id}</span>
              </p>
              <p className="text-md font-bold text-slate-700">
                Prduct SKU:{" "}
                <span className="font-normal text-xl">{product.sku}</span>
              </p>
              <p className="text-md font-bold text-slate-700">
                Price:{" "}
                <span className="font-normal text-xl">
                  ${product.price.toFixed(2)}
                </span>
              </p>
              <p className="text-md font-bold text-slate-700">
                Cost Price:
                <span className="font-normal text-xl">
                  ${product.costPrice.toFixed(2)}
                </span>
              </p>
              <p className="text-md font-bold text-slate-700">
                Stock in count:{" "}
                <span className="font-normal text-xl">
                  {product.countInStock}
                </span>
              </p>
              <p className="text-md font-bold text-slate-700">
                Current count:{" "}
                <span className="font-normal text-xl">
                  {product.currentCount}
                </span>
              </p>
              <p className="text-md font-bold text-slate-700">
                Sold count:{" "}
                <span className="font-normal text-xl">{product.soldCount}</span>
              </p>
              <p className="text-md font-bold text-slate-700">
                Category:{" "}
                <span className="font-normal text-xl">{product.category}</span>
              </p>
              <p className="text-md font-bold text-slate-700">
                Description:{" "}
                <span className="font-normal block">{product.description}</span>
              </p>
            </div>
          </div>
          <div className="mt-3 border border-slate-700 rounded-md p-2">
            <p className="text-xl font-semibold text-slate-700 py-2">
              Supplier Information
            </p>
            <p className="text-md font-bold text-slate-700">
              Name:{" "}
              <span className="font-normal text-xl">
                {product.supplierInfo.name}
              </span>
            </p>
            <div className="flex flex-wrap gap-3 py-2">
              <p className="text-sm font-bold text-slate-700">
                Country:{" "}
                <span className="font-normal text-md">
                  {product.supplierInfo.country}
                </span>
              </p>
              <p className="text-sm font-bold text-slate-700">
                City:{" "}
                <span className="font-normal text-md">
                  {product.supplierInfo.city}
                </span>
              </p>
              <p className="text-sm font-bold text-slate-700">
                Contact:{" "}
                <span className="font-normal text-md">
                  {product.supplierInfo.phone}
                </span>
              </p>
              <p className="text-sm font-bold text-slate-700">
                Email Address:{" "}
                <span className="font-normal text-md">
                  {product.supplierInfo.email}
                </span>
              </p>
              <p className="text-sm font-bold text-slate-700">
                Address:{" "}
                <span className="font-normal text-md">
                  {product.supplierInfo.address}
                </span>
              </p>
              <p className="text-sm font-bold text-slate-700">
                Website:{" "}
                <span className="font-normal text-md">
                  {product.supplierInfo.website}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
