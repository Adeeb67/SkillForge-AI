"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  // ✅ LOAD PROFILE
  useEffect(() => {
    const profile = localStorage.getItem("userProfile");
    const storedEmail =
      localStorage.getItem("userEmail") ||
      sessionStorage.getItem("userEmail");

    if (profile) {
      const data = JSON.parse(profile);
      setName(data.name || "");
      setAvatar(data.avatar || null);
    }

    if (storedEmail) setEmail(storedEmail);
  }, []);

  // ✅ IMAGE UPLOAD
  const handleAvatarUpload = (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatar(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // ✅ SAVE PROFILE
  const saveProfile = () => {
    const profileData = { name, email, avatar };

    localStorage.setItem("userProfile", JSON.stringify(profileData));

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center
    bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">

      <h1 className="text-5xl font-extrabold mb-10">
        SkillForge AI
      </h1>

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl w-[420px]">

        <h2 className="text-2xl font-bold mb-6 text-center">
          👤 Edit Profile
        </h2>

        {/* AVATAR */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={avatar || "/default-avatar.png"}
            className="w-24 h-24 rounded-full object-cover border-2 border-white mb-3"
          />

          <input type="file" accept="image/*" onChange={handleAvatarUpload} />
        </div>

        {/* NAME */}
        <input
          placeholder="Your Name"
          className="w-full p-3 mb-4 rounded-lg bg-white/20 outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* EMAIL */}
        <input
          disabled
          className="w-full p-3 mb-4 rounded-lg bg-white/20 opacity-70"
          value={email}
        />

        {/* SAVE */}
        <button
          onClick={saveProfile}
          className="w-full bg-green-600 py-3 rounded-lg hover:bg-green-700"
        >
          Save Profile
        </button>

        {saved && (
          <p className="text-green-400 text-center mt-4">
            ✅ Profile Updated
          </p>
        )}

        <button
          onClick={() => router.push("/dashboard")}
          className="w-full mt-4 bg-white/10 py-3 rounded-lg"
        >
          Back to Dashboard
        </button>
      </div>
    </main>
  );
}
