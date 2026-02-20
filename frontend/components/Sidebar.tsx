"use client";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#F6F7FB] border-r border-gray-200 p-6">

      <h1 className="text-2xl font-bold text-indigo-600 mb-10">
        SkillForge
      </h1>

      <nav className="space-y-4">

        <div className="bg-indigo-50 text-indigo-600 font-medium px-4 py-3 rounded-lg">
          Dashboard
        </div>

        <p className="text-gray-600 px-4 py-3">Learning Studio</p>
        <p className="text-gray-600 px-4 py-3">Smart Debugger</p>
        <p className="text-gray-600 px-4 py-3">Challenges</p>
        <p className="text-gray-600 px-4 py-3">Settings</p>

      </nav>
    </div>
  );
}
