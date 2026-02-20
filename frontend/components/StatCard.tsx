import {
  TrendingUp,
  Target,
  Bug,
  BookOpen,
} from "lucide-react";

const icons: any = {
  xp: TrendingUp,
  level: Target,
  lessons: BookOpen,
  streak: Bug,
};

export default function StatCard({ title, value, icon }: any) {
  const Icon = icons[icon];

  return (
    <div className="bg-white shadow-[var(--card-shadow)] rounded-xl p-6 flex items-center gap-4 card-motion">

      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
        <Icon className="text-indigo-500" />
      </div>

      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">
          {value}
        </p>
      </div>
    </div>
  );
}
