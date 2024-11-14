import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "../global.css";

import { getQueryClient } from "@app/get-query-client";
import AdminHeader from "@components/Layouts/Admin/AdminHeader";
import AdminSidebar from "@components/Layouts/Admin/AdminSidebar";
import { WebVitals } from "@components/web-vitals";
import StyledComponentsRegistry from "@lib/registry";
import { LandingPageProvider } from "@providers/LandingPageProviders";
import Providers from "@providers/tanstackQueryProviders";
import { getProductListService } from "@services/product-services";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  require("@import/lib/mocks/msw-init");
}

const MulishFont = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dashboard Admin",
  description: "Dashboard Admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();

  // Prefetch data without awaiting
  queryClient.prefetchQuery({
    queryKey: ["get-product-list"],
    queryFn: getProductListService,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <html lang="en">
      <body className={MulishFont.className}>
        <Providers>
          <HydrationBoundary state={dehydratedState}>
            <StyledComponentsRegistry>
              <main className="bg-secondary-light w-full block h-full">
                <LandingPageProvider>
                  <WebVitals></WebVitals>
                  <div
                    id="admin-layout"
                    className="w-full bg-secondary-light min-h-screen justify-between flex"
                  >
                    <AdminSidebar
                      menu={[
                        {
                          title: "Home",
                          link: "/admin",
                          icon: "home",
                        },
                        {
                          title: "Products",
                          link: "/admin/products",
                          icon: "file",
                        },
                        {
                          title: "Sales",
                          link: "/admin/sales",
                          icon: "chart",
                        },
                        {
                          title: "Settings",
                          link: "/admin/settings",
                          icon: "gear",
                        },
                      ]}
                    />
                    <div className="inline-flex w-full lg:w-[calc(100%-300px)] xs:w-full md:w-full sm:w-full  flex-col">
                      <AdminHeader />

                      <section className="inline-flex">{children}</section>
                    </div>
                  </div>
                  <div id="portal-root"></div>
                  <Analytics />
                </LandingPageProvider>
              </main>
            </StyledComponentsRegistry>
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
