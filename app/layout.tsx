import { Header } from "./components";
import "./sass/layout.sass";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
