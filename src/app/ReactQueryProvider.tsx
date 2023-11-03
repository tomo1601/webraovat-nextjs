"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { QueryClientInstanceProvider, useQueryClientInstance } from "./context/QueryClientContext";

const queryClient = new QueryClient();

const AppQueryClientInstanceWrapper = ({ children }: { children: React.ReactNode }) => {
  const { queryClient } = useQueryClientInstance();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
export default function ReactQueryProvider({children}: {children: React.ReactNode}) {
  return (
    <QueryClientInstanceProvider>
      <AppQueryClientInstanceWrapper>{children}</AppQueryClientInstanceWrapper>
    </QueryClientInstanceProvider>
  );
}
