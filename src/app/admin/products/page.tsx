// AdminProductsPage.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@components/Form/Button";
import ImageUpload from "@components/Form/ImageUpload";
import RadioInput from "@components/Form/RadioInput";
import { useSnackbar } from "@providers/SnackbarProvider";
import { getProductCategoriesService, postProductService } from "@services/product-services";

// Define the validation schema
const productSchema = z.object({
  name: z.string().min(3, "Product name is required"),
  description: z.string().min(3, "Description is required"),
  sku: z.string().min(3, "SKU is required"),
  stock: z.number().int().min(1, "Stock must be a positive integer"), // expects a number
  category_id: z.number().int().min(1, "Category is required"), // expects a number
  price: z.number().min(1, "Price must be greater than 0"), // expects a number
  image: z.string().url("Please provide a valid URL for the image"), // expects a string (URL)
});

type ProductSchema = z.infer<typeof productSchema>;

const AdminProductsPage = () => {
  const { showSnackbar } = useSnackbar();
  const [isLoadingSubmit, setLoading] = useState<boolean>(false);
  const { data: responseProductCategories, isLoading } = useQuery({
    queryKey: ["get-product-categories"],
    queryFn: getProductCategoriesService,
  });

  // Setup react-hook-form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
  });

  const { mutateAsync, reset: resetPostProduct } = useMutation({
    mutationFn: postProductService,
  });

  const onSubmit = async (data: ProductSchema) => {
    setLoading(true);
    try {
      const result: any = await mutateAsync(data);

      if (result?.data?.status) {
        reset();
        resetPostProduct();
        showSnackbar(result?.data?.message, "success");
      } else {
        showSnackbar("Failed Submit Form Try Again", "error");
      }

      setLoading(false);
    } catch (_) {
      showSnackbar("Failed Submit Form Try Again", "error");
      setLoading(false);
    }
  };

  return (
    <div className="w-full block">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col xs:flex-col md:flex-col lg:flex-row sm:flex-col"
      >
        <div className="p-[24px] lg:w-[calc(100%-300px)] xs:w-full w-full md:w-full sm:w-full flex-col space-y-6">
          <div className="flex flex-col space-y-4">
            <label className="text-primary" htmlFor="name">
              Product Name
            </label>
            <input
              {...register("name")}
              className={`rounded-[10px] px-4 py-3 text-gray-700 bg-white border border-primary focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-tl-lg w-full`}
              type="text"
            />
            {errors.name && <p className="text-danger">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-primary" htmlFor="description">
              Description
            </label>
            <textarea
              {...register("description")}
              className={`px-4 py-3 rounded-[10px] p-[16px] bg-white border-primary text-gray-700 bg-gray-50 border focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-tl-lg w-full`}
            />
            {errors.description && <p className="text-danger">{errors.description.message}</p>}
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 gap-4">
            <div className="inline-grid grid-row space-y-4">
              <label className="text-primary" htmlFor="sku">
                SKU
              </label>
              <input
                {...register("sku")}
                className={`rounded-[10px] px-4 py-3 text-gray-700 bg-white border border-primary focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-tl-lg w-full`}
                type="text"
              />
              {errors.sku && <p className="text-danger">{errors.sku.message}</p>}
            </div>
            <div className="inline-grid grid-row space-y-4">
              <label className="text-primary" htmlFor="stock">
                Stock
              </label>
              <input
                {...register("stock", { valueAsNumber: true })}
                className={`rounded-[10px] px-4 py-3 text-gray-700 bg-white border border-primary focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-tl-lg w-full`}
                type="number"
              />
              {errors.stock && <p className="text-danger">{errors.stock.message}</p>}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-primary" htmlFor="category_id">
              Category
            </label>
            <RadioInput
              name="category_id"
              options={responseProductCategories?.response?.map((item: any) => ({
                label: item?.name,
                value: item?.id,
              }))}
              control={control} // Pass control to RadioButton
            />
            {errors.category_id && <p className="text-danger">{errors.category_id.message}</p>}
          </div>

          <div className="flex justify-between flex-row items-center">
            <div className="inline-flex flex-col space-y-4 w-[237px] lg:w-[237px] xs:w-full lg:inline-flex md:w-full sm:w-full">
              <label className="text-primary" htmlFor="price">
                Price
              </label>
              <input
                {...register("price", { valueAsNumber: true })}
                className={`rounded-[10px] px-4 py-3 text-gray-700 bg-white border border-primary focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-tl-lg w-full`}
                type="number"
              />
              {errors.price && <p className="text-danger">{errors.price.message}</p>}
            </div>
            <div className="flex-col space-y-4 w-[237px] xs:hidden md:hidden hidden lg:inline-flex sm:hidden justify-end items-end">
              <Button isLoading={isLoadingSubmit || isLoading} type="submit">
                Publish
              </Button>
            </div>
          </div>
        </div>
        <div className=" p-[24px] w-full xs:w-auto md:h-auto xs:h-auto lg:h-screen lg:w-[300px] xs:w-full md:w-full sm:w-full xs:p-[24px] md:p-[24px] sm:p-[24px] lg:bg-[#f5fcff] transparent sm:bg-transparent xs:bg-transparent md:bg-transparent">
          <Controller
            control={control}
            name="image"
            render={({ field }) => (
              <ImageUpload
                onChange={(fileUrl: any) => field.onChange(fileUrl)} // Pass the URL of the image
                value={field.value} // This holds the current value of the image
              />
            )}
          />
          {errors.image && <p className="text-danger">{errors.image.message}</p>}
        </div>
        <div className="flex-col p-[24px]  space-y-4 w-full xs:flex md:flex sm:flex flex lg:hidden justify-end items-end">
          <Button isLoading={isLoadingSubmit || isLoading} type="submit">
            Publish
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdminProductsPage;
