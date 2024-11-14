"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "@components/styles/theme";
import { TChildrenElement } from "src/types/react.types";

import { MockProvider } from "./MockProviders";
import { SnackbarProvider } from "@providers/SnackbarProvider";

const queryClient = new QueryClient();

export default function Providers({ children }: TChildrenElement) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MockProvider>{children}</MockProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
