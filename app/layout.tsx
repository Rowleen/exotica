import './sass/globals.sass';
import styles from './sass/layout.module.sass';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrapper}>{children}</div>
      </body>
    </html>
  );
}
