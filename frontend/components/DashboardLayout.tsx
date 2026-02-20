"use client";

import Sidebar from "./Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#F6F7FB] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT AREA */}
      <main className="ml-64 p-10">
        {children}
      </main>

    </div>
  );
}
