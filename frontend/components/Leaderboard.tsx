"use client";

const users = [
  { rank:1, name:"Sarah K.", xp:"3,200 XP"},
  { rank:2, name:"Mike Chen", xp:"2,950 XP"},
  { rank:3, name:"Alex Dev", xp:"2,450 XP"},
  { rank:4, name:"Jessica R.", xp:"2,100 XP"},
];

export default function Leaderboard(){
  return(
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

      <h2 className="text-lg font-semibold mb-5">
        Top Learners
      </h2>

      <div className="space-y-3">
        {users.map(u=>(
          <div
            key={u.rank}
            className="flex justify-between bg-gray-100 rounded-lg p-3"
          >
            <span>
              {u.rank}. {u.name}
            </span>

            <span className="text-gray-500 font-medium">
              {u.xp}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
