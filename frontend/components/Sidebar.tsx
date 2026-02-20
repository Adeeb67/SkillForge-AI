"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Learning", href: "#" },
    { name: "Challenges", href: "#" },
    { name: "Settings", href: "#" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r p-6">

      <h2 className="text-xl font-semibold mb-10">
        SkillForge AI
      </h2>

      <div className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block px-4 py-3 rounded-xl transition ${
              pathname === item.href
                ? "sidebar-active"
                : "hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
