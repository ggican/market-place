"use client";

import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

import Balance from "@components/Balance";
import Invoice from "@components/Invoice";
import Content from "@components/Layouts/External/ExternalContent";
import ProductCard from "@components/ProductCard";
import { getProductCategoriesService, getProductListService } from "@services/product-services";
import { TProduct } from "src/types/product.types";

export default function HomePage() {
  const { data: responseProductList }: any = useQuery({
    queryKey: ["get-product-list"],
    queryFn: getProductListService,
  });

  const { data: responseProductCategories, isLoading } = useQuery({
    queryKey: ["get-product-categories"],
    queryFn: getProductCategoriesService,
  });

  const categoryList = useMemo(() => {
    return responseProductCategories?.response || [];
  }, [responseProductCategories]);

  const productList = useMemo(() => {
    return responseProductList?.data?.response || [];
  }, [responseProductList]);

  const onGetCategoryLabel = (categoryId?: any) => {
    let categoryLabel = "-";
    if (categoryList && !isLoading && categoryId) {
      for (let i = 0; i < categoryList.length; i++) {
        if (categoryList[i].id === Number(categoryId)) {
          categoryLabel = categoryList[i]?.name;
          break;
        }
      }
    }

    return categoryLabel;
  };
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
        <div className="space-x-3 overflow-auto whitespace-nowrap inline-block w-full">
          {productList?.map((item: TProduct, key: number) => {
            return (
              <div key={key} className="first:pl-[36px] last:pr-[30px] inline-flex">
                <div className="w-[176px] inline-flex ">
                  <ProductCard
                    {...{
                      url: `/products/${item?.id}`,
                      image: item?.image || "",
                      title: "T-Shirt",
                      category: onGetCategoryLabel(item?.category_id),
                      totalPrice: item?.price
                        ? new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(item?.price)
                        : "",
                      totalQuantity: 12,
                    }}
                  ></ProductCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Content>
  );
}
