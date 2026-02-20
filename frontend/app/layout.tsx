"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (pathname.startsWith("/dashboard") && !token) {
      router.push("/login");
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-[#F6F7FB]`}>
        {children}
      </body>
    </html>
  );
}
