import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

interface QueryProviderProps {
  children?: React.ReactNode;
}

export const QueryProvider = ({children}: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
