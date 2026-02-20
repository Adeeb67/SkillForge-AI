export default function Leaderboard() {

  const users = [
    {name:"Sarah K.",xp:3200},
    {name:"Mike Chen",xp:2950},
    {name:"Alex Dev",xp:2450},
    {name:"Jessica R.",xp:2100},
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="font-semibold mb-4">Top Learners</h2>

      <div className="space-y-3">
        {users.map((u,i)=>(
          <div key={i} className="flex justify-between">
            <span>{i+1}. {u.name}</span>
            <span className="text-gray-500">{u.xp} XP</span>
          </div>
        ))}
      </div>
    </div>
  );
}
