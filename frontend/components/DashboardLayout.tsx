"use client";

import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: 40,
        fontSize: 20,
      }}
    >
      ✅ Layout Working
      <div>{children}</div>
    </div>
  );
}
