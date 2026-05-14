import { products } from "@/lib/products.data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug)!;
  return (
    <div className="h-full w-full overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-slate-50 scrollbar-track-blue-600">
      {/* header */}
      <div className="mt-12 mb-3 flex items-center justify-evenly bg-neutral-950 border border-slate-700 rounded-md p-3">
        <Button className="">
          <Link href="/dashboard/products" className="flex items-center gap-1">
            &#8592; Back to products
          </Link>
        </Button>
        <p className="text-xl font-bold py-3 text-center capitalize">
          Product details.
        </p>
      </div>
      {/* product details */}
      <div className="bg-neutral-950 rounded-md">
        <div className="flex flex-col w-full">
          {/* product image */}
          <div className="w-full p-3 rounded-md overflow-hidden flex flex-col md:flex-row gap-5">
            <div className="w-full h-75 relative">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="100%"
                className="rounded-md object-contain p-1"
              />
            </div>
          </div>
          {/* product description */}
          <div className="w-full bg-neutral-900 p-3 mt-5">
            <div className="">
              <h1 className="text-xl font-bold bg-blue-900 text-slate-200 p-1 rounded-md text-center">
                {product.name}
              </h1>
              <div className="mt-3 border border-slate-700 p-2 rounded-md">
                <p className="text-md font-bold">
                  Prduct ID:{" "}
                  <span className="font-normal text-xl">{product.id}</span>
                </p>
                <p className="text-md font-bold">
                  Prduct SKU:{" "}
                  <span className="font-normal text-xl">{product.sku}</span>
                </p>
                <p className="text-md font-bold">
                  Price:{" "}
                  <span className="font-normal text-xl">
                    ${product.price.toFixed(2)}
                  </span>
                </p>
                <p className="text-md font-bold">
                  Cost Price:
                  <span className="font-normal text-xl">
                    ${product.costPrice.toFixed(2)}
                  </span>
                </p>
                <p className="text-md font-bold">
                  Stock in count:{" "}
                  <span className="font-normal text-xl">
                    {product.countInStock}
                  </span>
                </p>
                <p className="text-md font-bold">
                  Current count:{" "}
                  <span className="font-normal text-xl">
                    {product.currentCount}
                  </span>
                </p>
                <p className="text-md font-bold">
                  Sold count:{" "}
                  <span className="font-normal text-xl">
                    {product.soldCount}
                  </span>
                </p>
                <p className="text-md font-bold">
                  Category:{" "}
                  <span className="font-normal text-xl">
                    {product.category}
                  </span>
                </p>
                <p className="text-md font-bold">
                  Description:{" "}
                  <span className="font-normal block">
                    {product.description}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-3 border border-slate-700 rounded-md p-2">
              <p className="text-xl font-semibold py-2">Supplier Information</p>
              <p className="text-md font-bold">
                Name:{" "}
                <span className="font-normal text-xl">
                  {product.supplierInfo.name}
                </span>
              </p>
              <div className="flex flex-wrap gap-3 py-2">
                <p className="text-sm font-bold">
                  Country:{" "}
                  <span className="font-normal text-md">
                    {product.supplierInfo.country}
                  </span>
                </p>
                <p className="text-sm font-bold">
                  City:{" "}
                  <span className="font-normal text-md">
                    {product.supplierInfo.city}
                  </span>
                </p>
                <p className="text-sm font-bold">
                  Contact:{" "}
                  <span className="font-normal text-md">
                    {product.supplierInfo.phone}
                  </span>
                </p>
                <p className="text-sm font-bold">
                  Email Address:{" "}
                  <span className="font-normal text-md">
                    {product.supplierInfo.email}
                  </span>
                </p>
                <p className="text-sm font-bold">
                  Address:{" "}
                  <span className="font-normal text-md">
                    {product.supplierInfo.address}
                  </span>
                </p>
                <p className="text-sm font-bold">
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
    </div>
  );
};

export default ProductDetailPage;
