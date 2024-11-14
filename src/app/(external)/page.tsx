import { Metadata } from "next";

import HomePage from "@app/(external)/components/HomePage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Testing",
    description: "Testing Next JS",
  };
}

export default async function AdminHomePage() {
  return <HomePage></HomePage>;
}
