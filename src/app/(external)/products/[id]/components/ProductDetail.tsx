"use client";

import Link from "next/link";

import QuantityInput from "@components/Form/QuantityInput";
import Icon from "@components/Icon";
import Content from "@components/Layouts/External/ExternalContent";
import ProductCard from "@components/ProductCard";

export default function ProductDetail() {
  return (
    <Content>
      <header className="bg-transparent fixed z-50 top-0 left-0 right-0 w-full flex">
        <Content>
          <div className="w-full px-[26px] py-[26px]">
            <Link href="/">
              <Icon color="primary-light" icon="chevron-left"></Icon>
            </Link>
          </div>
        </Content>
      </header>

      <div className="block min-h-screen">
        <ProductCard
          {...{
            isDetail: true,
            image: "/no-image.png",
            title: "T-Shirt",
            category: "Dry Cleaning",
            totalPrice: "$ 4.000",
            totalQuantity: 12,
          }}
        ></ProductCard>
        <div className="flex-col flex w-full mt-[40px] items-start px-[26px]">
          <div className="inline-block w-auto p-[8px] rounded-[6px] bg-secondary">
            <span className="text-primary font-robot text-[13px] font-normal">Category</span>
          </div>
          <p className="mt-[14px] text-primary font-roboto text-[44px] font-bold leading-[51.56px] tracking-[0.075em] text-left decoration-solid">
            T-Shirt
          </p>
          <p className="font-robot font-medium text-[27px] text-primary py-[14px]">$ 6.00/pc</p>
          <p className="block text-wrap font-roboto text-[16px] font-normal leading-[18px] text-left ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum possimus odio ab adipisci
            maxime, enim sapiente nulla dignissimos modi voluptatibus. Molestias rerum reiciendis
            corrupti soluta unde doloremque tenetur harum vitae.
          </p>
        </div>
        <QuantityInput></QuantityInput>
      </div>
    </Content>
  );
}
