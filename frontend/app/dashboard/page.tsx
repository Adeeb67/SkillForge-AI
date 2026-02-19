"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div style={{ padding: 40 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Welcome Back 👋</h1>

        <button
          onClick={logout}
          style={{
            padding: "8px 16px",
            background: "black",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      <p style={{ marginTop: 20 }}>
        Your SkillForge Learning Dashboard
      </p>
    </div>
  );
}
