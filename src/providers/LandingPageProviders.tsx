"use client";

import { createContext, useContext } from "react";

import { SnackbarProvider } from "@providers/SnackbarProvider";

type LandingPageProvidersProps = {
  children?: any;
};

export type ValueWishList = {};

const DEFAULT_CONTEXT = {};

type LandingPageContextProps = {};

const LandingPageContext = createContext<LandingPageContextProps>(DEFAULT_CONTEXT);

const useLandingPageContext = () => useContext(LandingPageContext);

const LandingPageProvider: React.FC<LandingPageProvidersProps> = ({ children }) => {
  const props = {};
  return (
    <LandingPageContext.Provider value={{ ...props }}>
      <SnackbarProvider>{children}</SnackbarProvider>
    </LandingPageContext.Provider>
  );
};

export { LandingPageProvider, useLandingPageContext };
