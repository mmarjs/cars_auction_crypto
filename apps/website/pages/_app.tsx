import '@appWebsite/styles/styles.scss';
import { AppProps } from 'next/app';
import { WalletProvider } from '@appWebsite/providers/wallet-provider';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 15000,
            retry: 1,
          },
        },
      }),
  )
  return (
    <div className="min-h-screen">
      <WalletProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </WalletProvider>
    </div>
  );
}

export default CustomApp;
