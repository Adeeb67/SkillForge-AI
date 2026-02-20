import { TrendingUp, Target, BookOpen, Flame } from "lucide-react";

export default function StatCard({ title, value, icon }: any) {

  const icons: any = {
    xp: <TrendingUp />,
    level: <Target />,
    lessons: <BookOpen />,
    streak: <Flame />,
  };

  return (
    <div className="bg-white shadow-card rounded-xl p-6 flex items-center gap-4">

      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-indigo-600">
        {icons[icon]}
      </div>

      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-xl font-semibold">{value}</h3>
      </div>

    </div>
  );
}
