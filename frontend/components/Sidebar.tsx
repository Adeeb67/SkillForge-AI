"use client";

import {
  LayoutDashboard,
  GraduationCap,
  Bug,
  Trophy,
  Settings,
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Learning Studio", icon: GraduationCap },
  { name: "Smart Debugger", icon: Bug },
  { name: "Challenges", icon: Trophy },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#F6F7FB] border-r border-gray-200 p-6">

      <h1 className="text-xl font-semibold text-indigo-600 mb-10">
        SkillForge
      </h1>

      <nav className="space-y-2">
        {menu.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className={`
              flex items-center gap-3 px-4 py-3 rounded-xl
              cursor-pointer transition
              ${i === 0
                ? "bg-indigo-50 text-indigo-600 font-medium"
                : "text-gray-600 hover:bg-white"}
              `}
            >
              <Icon size={18} />
              {item.name}
            </div>
          );
        })}
      </nav>

      {/* USER */}
      <div className="absolute bottom-6 left-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />
        <div>
          <p className="text-sm font-medium">Alex Developer</p>
          <p className="text-xs text-gray-400">Level 12 • Pro</p>
        </div>
      </div>
    </aside>
  );
}
