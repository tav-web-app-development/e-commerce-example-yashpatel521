import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Prodcut Title Page</h1>
      {children}
    </>
  );
}
