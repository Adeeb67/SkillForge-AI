"use client";

import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F6F7FB]">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-6">
        <h1 className="text-xl font-semibold mb-8">
          Skill<span className="text-indigo-600">Forge</span>
        </h1>

        <nav className="space-y-4 text-gray-600">
          <p className="font-medium text-indigo-600">Dashboard</p>
          <p>Learning Studio</p>
          <p>Smart Debugger</p>
          <p>Challenges</p>
          <p>Settings</p>
        </nav>
      </aside>

      {/* CONTENT */}
      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  );
}
