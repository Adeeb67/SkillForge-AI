"use client";

import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[var(--bg-main)]">
      <Sidebar />

      <main className="ml-64 w-full p-10">
        {children}
      </main>
    </div>
  );
}
