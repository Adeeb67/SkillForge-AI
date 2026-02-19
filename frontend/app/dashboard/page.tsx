"use client";

import { useEffect, useState } from "react";
import { getDashboard } from "@/lib/api";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getDashboard().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome back, {data.user}</h1>
      <p>Hours Learned: {data.hours}</p>
      <p>Skills Mastered: {data.skills}</p>
      <p>Bugs Fixed: {data.bugs_fixed}</p>
      <p>Lessons Completed: {data.lessons}</p>
    </div>
  );
}
