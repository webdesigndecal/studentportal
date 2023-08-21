import Header from "@/components/Header/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { UserProvider } from "@/contexts/userContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "WDD Student Portal",
  description: "Created by your WDD staff!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <UserProvider>
          <div style={{ minHeight: "100vh" }}>
            <Header />
            {children}
          </div>
        </UserProvider>
      </body>
    </html>
  );
}
