"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

import Balance from "@components/Balance";
import Invoice from "@components/Invoice";
import Content from "@components/Layouts/External/ExternalContent";
import ProductCard from "@components/ProductCard";
import { getProductListService } from "@services/product-services";

export default function HomePage() {
  const { data } = useSuspenseQuery({
    queryKey: ["get-product-list"],
    queryFn: getProductListService,
  });

  return (
    <Content>
      <Balance balance="$200.000" name="Ikhsan Mahendri"></Balance>
      <div className="flex flex-col mt-[70px] px-[36px]">
        <div className="block w-full mb-10">
          <div className="text-primary block my-[12px] font-roboto text-[16.08px] font-bold leading-[18.84px] tracking-[0.075em] text-left">
            PREVIOUS ORDER
          </div>
          <Invoice
            {...{
              image: "/no-image.png",
              productTitle: "Bag of Laundry",
              total: "$ 180.00",
            }}
          ></Invoice>
        </div>
        <div className="block w-full mb-10">
          <div className="text-primary block my-[12px] font-roboto text-[16.08px] font-bold leading-[18.84px] tracking-[0.075em] text-left">
            YOUR MOST ORDERED
          </div>
          <ProductCard
            {...{
              image: "/no-image.png",
              productTitle: "Bag of Laundry",
              totalPrice: "$ 4.000",
              totalQuantity: 12,
            }}
          ></ProductCard>
        </div>
      </div>

      <div className="block w-full mb-10">
        <div className="text-primary pl-[36px] block my-[12px] font-roboto text-[16.08px] font-bold leading-[18.84px] tracking-[0.075em] text-left">
          OUR LATEST PRODUCT
        </div>
        <div className="space-x-4 overflow-auto whitespace-nowrap inline-block w-full">
          <div className="first:pl-[36px] last:pr-[30px] inline-flex">
            <div className="w-[176px]  inline-flex ">
              <ProductCard
                {...{
                  image: "/no-image.png",
                  title: "T-Shirt",
                  category: "Dry Cleaning",
                  totalPrice: "$ 4.000",
                  totalQuantity: 12,
                }}
              ></ProductCard>
            </div>
          </div>
          <div className="first:pl-[36px] last:pr-[36px] inline-flex">
            <div className="w-[176px]  inline-flex">
              <ProductCard
                {...{
                  image: "/no-image.png",
                  title: "T-Shirt",
                  category: "Dry Cleaning",
                  totalPrice: "$ 4.000",
                  totalQuantity: 12,
                }}
              ></ProductCard>
            </div>
          </div>
          <div className="first:pl-[36px] last:pr-[36px] inline-flex">
            <div className="w-[176px]  inline-flex">
              <ProductCard
                {...{
                  image: "/no-image.png",
                  title: "T-Shirt",
                  category: "Dry Cleaning",
                  totalPrice: "$ 4.000",
                  totalQuantity: 12,
                }}
              ></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}
