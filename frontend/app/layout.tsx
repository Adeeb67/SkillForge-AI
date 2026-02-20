"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

/* ==============================
   FONT (MATCH ORIGINAL DASHBOARD)
============================== */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

/* ==============================
   ROOT LAYOUT
============================== */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  /* ==============================
     AUTH GUARD
  ============================== */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (pathname.startsWith("/dashboard") && !token) {
      router.push("/login");
    }
  }, [pathname, router]);

  return (
    <html lang="en" className={inter.variable}>
      <body
        className="
          font-sans
          bg-[#F6F7FB]
          text-[#111827]
          antialiased
          selection:bg-indigo-500
          selection:text-white
        "
      >
        {children}
      </body>
    </html>
  );
}
