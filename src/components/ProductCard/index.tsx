import dynamic from "next/dynamic";

const ProductCard = dynamic(() => import("./ProductCard"), {
  ssr: true,
});

export default ProductCard;
