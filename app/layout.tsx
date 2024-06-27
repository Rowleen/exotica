'use client';
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
        <body>
          <div className={styles.wrapper}>{children}</div>
        </body>
      </html>
    </QueryClientProvider>
  );
}
