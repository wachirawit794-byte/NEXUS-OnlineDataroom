import type { Metadata } from "next";
import "./globals.css";
import { companyName } from "@/lib/config";

export const metadata: Metadata = {
  title: `${companyName} | Data Room`,
  description: `Secure Virtual Data Room for ${companyName}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
