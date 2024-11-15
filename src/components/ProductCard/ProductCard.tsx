import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

import { TProductCardProps } from "@components/ProductCard/ProductCard.types";

const ProductCard: FC<TProductCardProps> = ({
  totalQuantity,
  image,
  title,
  totalPrice,
  category,
  isDetail,
  url = "/",
}) => {
  const [src, setSrc] = useState(image);
  return (
    <Link
      href={url}
      className="relative flex justify-between rounded-md shadow-custom-blue items-center w-full"
    >
      <div
        className="w-full"
        style={{
          width: "100%",
          minHeight: isDetail ? "55vh" : "214px",
          objectFit: "cover",
        }}
      >
        <Image
          priority={true}
          alt="product image"
          src={src ? src : "/no-image.png"}
          width={0}
          height={0}
          sizes="100vw"
          blurDataURL="/no-image.png"
          onError={() => setSrc("/no-image.png")}
          className={!isDetail ? "rounded-md" : "rounded-[20px]"}
          style={{
            width: "100%",
            height: isDetail ? "55vh" : "214px",
            minHeight: isDetail ? "55vh" : "214px",
            objectFit: "cover",
          }}
        />
      </div>
      {isDetail ? (
        <div className="pt-10 px-4 pb-4 bg-most-product-order-gradient absolute bottom-0 h-[50%] left-0 right-0 rounded-br-[20px] rounded-bl-[20px]"></div>
      ) : (
        <div className="pt-10 px-4 pb-4 bg-most-product-order-gradient absolute bottom-0 left-0 right-0 rounded-md">
          {category && (
            <div className="w-full flex items-center flex-row mb-[4px]">
              <span className="bg-danger w-[6px] mr-[5px] h-[6px] rounded-full inline-flex"></span>
              <p className="font-roboto text-[10px] font-normal leading-[10.91px] text-left decoration-non text-white-dark">
                {category}
              </p>
            </div>
          )}
          <p className="font-roboto text-[23.69px] font-bold leading-[27.76px] tracking-[0.075em] text-left text-white">
            {title}
          </p>
          {category
            ? totalPrice && (
                <p className="font-roboto text-[16.96px] font-medium leading-[19.88px] text-left text-white mt-1">
                  {totalPrice} / pc
                </p>
              )
            : totalPrice && (
                <p className="font-roboto text-[16.96px] font-medium leading-[19.88px] text-left text-white mt-1">
                  {totalQuantity}x | total of {totalPrice}
                </p>
              )}
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
