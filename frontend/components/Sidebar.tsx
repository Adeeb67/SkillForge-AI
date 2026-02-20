"use client";

import {
  LayoutDashboard,
  GraduationCap,
  Bug,
  Trophy,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  const items = [
    { name: "Dashboard", icon: LayoutDashboard, active: true },
    { name: "Learning Studio", icon: GraduationCap },
    { name: "Smart Debugger", icon: Bug },
    { name: "Challenges", icon: Trophy },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#f5f6fa] border-r min-h-screen p-6">
      <h1 className="text-2xl font-bold text-indigo-600 mb-10">
        SkillForge
      </h1>

      <nav className="space-y-2">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer
              ${
                item.active
                  ? "bg-indigo-100 text-indigo-600 font-medium"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </div>
          );
        })}
      </nav>

      <div className="absolute bottom-6 text-sm text-gray-500">
        <p>Alex Developer</p>
        <p className="text-xs">Level 12 • Pro</p>
      </div>
    </aside>
  );
}
