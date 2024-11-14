import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

import ProductDetail from "@app/(external)/products/[id]/components/ProductDetail";
import { getProductDetailByIdService } from "@services/product-services";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Product Detail",
    description: "Testing Next JS",
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params)?.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["get-product-detail", id],
    queryFn: () => {
      return getProductDetailByIdService(id);
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetail id={id} />
    </HydrationBoundary>
  );
}
