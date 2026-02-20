"use client";

import "./globals.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // wait until browser loads
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const token = localStorage.getItem("token");

    if (pathname.startsWith("/dashboard") && !token) {
      router.push("/login");
    }
  }, [mounted, pathname]);

  // prevent SSR crash
  if (!mounted) return null;

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
