"use client";

import {
  LayoutDashboard,
  GraduationCap,
  Bug,
  Trophy,
  Settings,
} from "lucide-react";

import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
    { name: "Learning Studio", icon: GraduationCap, href: "#" },
    { name: "Smart Debugger", icon: Bug, href: "#" },
    { name: "Challenges", icon: Trophy, href: "#" },
    { name: "Settings", icon: Settings, href: "#" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#F6F7FB] border-r border-gray-200 p-6 flex flex-col justify-between">

      <div>
        <h1 className="text-xl font-bold mb-10">
          <span className="text-gray-900">Skill</span>
          <span className="text-indigo-600">Forge</span>
        </h1>

        <nav className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`
                flex items-center gap-3 px-4 py-3 rounded-xl
                transition-all duration-200 relative
                ${
                  active
                    ? "bg-indigo-50 text-indigo-600 font-medium"
                    : "text-gray-600 hover:bg-white hover:shadow-sm"
                }
                `}
              >
                {active && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r bg-indigo-600"/>
                )}

                <Icon size={20}/>
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>

      {/* USER */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

        <div>
          <p className="text-sm font-medium text-gray-800">
            Alex Developer
          </p>
          <p className="text-xs text-gray-500">
            Level 12 • Pro
          </p>
        </div>
      </div>
    </aside>
  );
}
