import { ProductProps } from "@/lib/products.data";
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="w-full border border-slate-800 bg-neutral-950 rounded-lg overflow-hidden">
      <div className="w-full [150px] p-3 h-37.5 relative rounded-md">
        <Image
          src={product?.image}
          alt={product.name}
          fill
          sizes="100%"
          className="rounded-md object-contain p-1"
        />
      </div>
      <div className="bg-neutral-900 p-2 mt-2">
        <div className="">
          <h1 className="text-xl mb-3">{product?.name}</h1>
          <p className="text-sm">Price: ${product?.price.toFixed(2)}</p>
          <p className="text-sm mb-3">Stock count: {product?.countInStock}</p>
          <p className="text-sm">{product?.description}</p>
        </div>
        <Link
          className="bg-blue-700 hover:bg-blue-800 text-slate-200 transition-all py-1 px-2 rounded-md mt-3 inline-flex items-center gap-1"
          href={`/dashboard/products/${product.slug}`}
        >
          View Details <BsBoxArrowUpRight size={16} />{" "}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
