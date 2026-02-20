"use client";

export default function Leaderboard() {
  const users = [
    { rank: 1, name: "Sarah K.", xp: "3,200 XP" },
    { rank: 2, name: "Mike Chen", xp: "2,950 XP" },
    { rank: 3, name: "Alex Dev", xp: "2,450 XP" },
    { rank: 4, name: "Jessica R.", xp: "2,100 XP" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Top Learners
      </h2>

      <div className="space-y-3">
        {users.map((user) => (
          <div
            key={user.rank}
            className="flex justify-between bg-gray-100 p-3 rounded-lg"
          >
            <span>
              {user.rank}. {user.name}
            </span>
            <span className="text-gray-600">{user.xp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
