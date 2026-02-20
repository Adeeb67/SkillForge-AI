export default function Leaderboard() {
  const users = [
    { name: "Sarah K.", xp: "3,200 XP" },
    { name: "Mike Chen", xp: "2,950 XP" },
    { name: "Alex Dev", xp: "2,450 XP" },
    { name: "Jessica R.", xp: "2,100 XP" },
  ];

  return (
    <div className="bg-white shadow-card rounded-xl p-6">
      <h2 className="font-semibold mb-4">Top Learners</h2>

      <div className="space-y-3">
        {users.map((u, i) => (
          <div
            key={i}
            className="flex justify-between bg-gray-100 p-3 rounded-lg"
          >
            <span>{i + 1}. {u.name}</span>
            <span className="text-gray-500">{u.xp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
