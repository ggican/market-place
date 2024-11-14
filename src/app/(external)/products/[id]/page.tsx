import { Metadata } from "next";

import HomePage from "@app/(external)/components/HomePage";
import ProductDetail from "@app/(external)/products/[id]/components/ProductDetail";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Product Detail",
    description: "Testing Next JS",
  };
}

export default async function AdminHomePage() {
  return <ProductDetail />;
}
