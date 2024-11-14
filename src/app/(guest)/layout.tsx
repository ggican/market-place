import "../global.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import { WebVitals } from "@components/web-vitals";
import StyledComponentsRegistry from "@lib/registry";
import { LandingPageProvider } from "@providers/LandingPageProviders";
import Providers from "@providers/tanstackQueryProviders";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={MulishFont.className}>
        <Providers>
          <StyledComponentsRegistry>
            <LandingPageProvider>
              <main className="w-full h-screen bg-primary flex justify-center items-center">
                <WebVitals></WebVitals>
                <div className="flex items-center justify-center bg-gray-100 w-[450px]">
                  <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                    {children}
                  </div>
                </div>
                <div id="portal-root"></div>
                <Analytics />
              </main>
            </LandingPageProvider>
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}