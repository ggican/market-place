"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import QuantityInput from "@components/Form/QuantityInput";
import Icon from "@components/Icon";
import Content from "@components/Layouts/External/ExternalContent";
import ProductCard from "@components/ProductCard";
import { getProductDetailByIdService } from "@services/product-services";

export default function ProductDetail({ id }: { id: string }) {
  const {
    data: productDetailResponse,
    isLoading,
    isFetching,
  }: any = useQuery({
    queryKey: ["get-product-detail", id],
    queryFn: () => {
      return getProductDetailByIdService(id);
    },
  });

  const productDetail = useMemo(() => {
    return productDetailResponse?.data?.response || null;
  }, [productDetailResponse]);

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

      {isLoading || isFetching ? (
        <div className="block min-h-screen">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="min-h-[55vh] rounded-b-[20px] bg-white-dark rounded"></div>
            </div>
          </div>

          <div className="animate-pulse flex space-x-4 px-[26px] mt-[40px]">
            <div className="flex-1 space-y-6 py-1">
              <div className="min-h-[30px]  rounded-[20px] bg-white-dark w-[120px]"></div>
            </div>
          </div>

          <div className="animate-pulse flex space-x-4 px-[26px] mt-[40px]">
            <div className="flex-1 space-y-6 py-1">
              <div className="min-h-[20px]  rounded-[20px] bg-white-dark w-[80%]"></div>
            </div>
          </div>

          <div className="animate-pulse flex space-x-4 px-[26px] ">
            <div className="flex-1 space-y-6 py-1">
              <div className="min-h-[20px] rounded-[20px] bg-white-dark w-[110px]"></div>
            </div>
          </div>

          <div className="animate-pulse flex space-x-4 px-[26px] mt-[40px]">
            <div className="flex-1 space-y-2 py-1">
              <div className="min-h-[10px]  rounded-[20px] bg-white-dark w-[80%]"></div>
              <div className="min-h-[10px]  rounded-[20px] bg-white-dark w-[65%]"></div>
              <div className="min-h-[10px]  rounded-[20px] bg-white-dark w-[65%]"></div>
              <div className="min-h-[10px]  rounded-[20px] bg-white-dark w-[45%]"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="block min-h-screen">
          {productDetail === null ? (
            <div className="h-screen w-screen flex justify-center items-center">
              <div className="w-[340px] h-[340px] p-[50px] rounded-full bg-white inline-flex justify-center items-center">
                <Image
                  priority={true}
                  alt="product image"
                  src="/404.png"
                  width={320}
                  height={320}
                  sizes="100vw"
                  className="rounded-lg"
                />
              </div>
            </div>
          ) : (
            <>
              <ProductCard
                {...{
                  isDetail: true,
                  image: productDetail?.image,
                  title: productDetail?.name,
                  category: "Dry Cleaning",
                  totalPrice: productDetail?.price
                    ? new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(productDetail?.price)
                    : "",
                  totalQuantity: 12,
                }}
              ></ProductCard>
              <div className="flex-col flex w-full mt-[40px] mb-[40px] items-start px-[26px]">
                <div className="inline-block w-auto p-[8px] rounded-[6px] bg-secondary">
                  <span className="text-primary font-robot text-[13px] font-normal">Category</span>
                </div>
                <p className="mt-[14px] text-primary font-roboto text-[44px] font-bold leading-[51.56px] tracking-[0.075em] text-left decoration-solid">
                  {productDetail?.name}
                </p>
                <p className="font-robot font-medium text-[27px] text-primary py-[14px]">
                  {productDetail?.price
                    ? new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(productDetail?.price)
                    : "-"}{" "}
                  / pc
                </p>
                <p className="block text-wrap font-roboto text-[16px] font-normal leading-[18px] text-left ">
                  {productDetail?.description}
                </p>
              </div>
              <QuantityInput></QuantityInput>
            </>
          )}
        </div>
      )}
    </Content>
  );
}
