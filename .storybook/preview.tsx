import type { Preview } from "@storybook/react";
import { Mulish } from "next/font/google";
import React from "react";
import { ThemeProvider } from "styled-components";

import "../src/app/global.css";
import { theme } from "../src/components/styles/theme";

const MulishFont = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const globalTypes = {};

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={theme}>
          <main className={`${MulishFont.className} block w-full`}>
            <div id="portal-root"></div>
            <Story />
          </main>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
