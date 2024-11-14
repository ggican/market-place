import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      shadow: {
        "custom-blue": "0px 4px 4px 0px rgba(0, 153, 238, 0.17)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(106.54deg, #0099EE 19.5%, rgba(235, 235, 235, 0) 95.15%)",
        "invoice-gradient":
          "linear-gradient(140.71deg, #099DEF 7.69%, rgba(9, 157, 239, 0.42) 95%)",
        "most-product-order-gradient":
          "linear-gradient(180deg, rgba(0, 153, 238, 0) 0%, #3B97CB 100%)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "custom-13": "13.27px", // custom font size
      },
      lineHeight: {
        "custom-19": "19.9px", // custom line height
      },
    },
    colors: {
      grey: "#58595F",
      "grey-dark": "#212427",
      success: "#56E4A0",
      white: "#ffffff",
      "white-very-light": "#cbecff",
      "white-dark": "#EAEAEA",
      danger: "#F36868",
      primary: "#3B97CB",
      "primary-light": "#2D9CDB",
      "primary-dark": "#0099EE",
      secondary: "#CAECFF",
      "secondary-light": "#e7f5fd",
      "black-title": "#303030",
      chart: "#B2C5D4",
      "chart-hover": "#3E7DAB",
      black: "#000",
      disabled: "#E0E0E0",
    },
  },
  screens: {
    tablet: "640px",
    // => @media (min-width: 640px) { ... }

    laptop: "1024px",
    // => @media (min-width: 1024px) { ... }

    desktop: "1280px",
    // => @media (min-width: 1280px) { ... }
  },
  // darkMode: "selector",
  plugins: [],
};
export default config;
