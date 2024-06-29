'use client';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './sass/globals.sass';
import styles from './sass/layout.module.sass';

const queryClient = new QueryClient();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Exotica: Travel Dream</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <body>
          <div className={styles.wrapper}>{children}</div>
        </body>
      </html>
    </QueryClientProvider>
  );
}
