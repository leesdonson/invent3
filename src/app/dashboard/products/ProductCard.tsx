import { ProductProps } from "@/lib/products.data";
import Image from "next/image";
import Link from "next/link";
import { BsBoxArrowUpRight } from "react-icons/bs";

const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div className="text-slate-900 w-full border border-slate-700 p-2 rounded-md">
      <div className="w-full [150px] h-[150px] relative rounded-md">
        <Image
          src={product?.image}
          alt={product.name}
          fill
          sizes="100%"
          className="rounded-md object-contain p-1"
        />
      </div>
      <div className="">
        <h1 className="text-xl">{product?.name}</h1>
        <p className="text-sm">Price: ${product?.price.toFixed(2)}</p>
        <p className="text-sm">Stock count: {product?.countInStock}</p>
        <p className="text-sm">{product?.description}</p>
      </div>
      <Link
        className="text-sm text-blue-700 font-normal flex items-center gap-1 justify-end hover:underline"
        href={`/dashboard/products/${product.slug}`}
      >
        View Details <BsBoxArrowUpRight size={16} />{" "}
      </Link>
    </div>
  );
};

export default ProductCard;
