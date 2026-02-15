"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();

  /* ================= AUTH ================= */
  useEffect(() => {
    const token =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    if (!token) router.push("/login");
  }, [router]);

  /* ================= STATES ================= */
  const [showChat, setShowChat] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [resumes, setResumes] = useState<any[]>([]);
  const [userEmail, setUserEmail] = useState("");

  const [deleteId, setDeleteId] = useState<string | null>(null);

  /* ✅ RENAME STATES */
  const [renameId, setRenameId] = useState<string | null>(null);
  const [newName, setNewName] = useState("");

  /* ================= LOAD ================= */
  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);

    const saved = localStorage.getItem("resumeLibrary");
    if (saved) setResumes(JSON.parse(saved));
  }, []);

  /* ================= LOGOUT ================= */
  const confirmLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    router.push("/login");
  };

  /* ================= DELETE ================= */
  const deleteResume = () => {
    if (!deleteId) return;

    const updated = resumes.filter(r => r.id !== deleteId);
    setResumes(updated);
    localStorage.setItem("resumeLibrary", JSON.stringify(updated));
    setDeleteId(null);
  };

  /* ================= RENAME ================= */
  const renameResume = () => {
    if (!renameId || !newName.trim()) return;

    const updated = resumes.map(r =>
      r.id === renameId ? { ...r, name: newName } : r
    );

    setResumes(updated);
    localStorage.setItem("resumeLibrary", JSON.stringify(updated));

    setRenameId(null);
    setNewName("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white p-10">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between mb-10">

        <div>{userEmail}</div>

        <div className="flex gap-3">
          <button
            onClick={() => router.push("/profile")}
            className="px-4 py-2 bg-white/10 rounded-lg"
          >
            👤 Profile
          </button>

          <button
            onClick={() => setShowChat(true)}
            className="px-4 py-2 bg-purple-600 rounded-lg"
          >
            🤖 AI Help
          </button>

          <button
            onClick={() => setShowLogoutModal(true)}
            className="px-4 py-2 bg-red-600 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ================= CARDS ================= */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">

        <Card title="🎯 Role Prediction" color="bg-purple-600"
          onClick={() => router.push("/role-prediction")} />

        <Card title="📊 ATS Match" color="bg-indigo-600"
          onClick={() => router.push("/ats-match")} />

        <Card title="📄 Resume Analyzer" color="bg-blue-600"
          onClick={() => router.push("/resume-score")} />

        <Card title="🧠 AI Resume Generator" color="bg-green-600"
          onClick={() => router.push("/resume-generator")} />

      </div>

      {/* ================= SAVED RESUMES ================= */}
      <h2 className="text-3xl font-bold mb-6">📂 My Saved Resumes</h2>

      <div className="grid md:grid-cols-3 gap-6">

        {resumes.map((r) => (
          <div key={r.id} className="bg-white text-black p-5 rounded-xl">

            <h3 className="font-bold">{r.name}</h3>

            <p className="text-sm text-gray-600">
              {new Date(r.createdAt).toLocaleString()}
            </p>

            <div className="flex gap-4 mt-4 text-sm">

              <button
                className="text-blue-600"
                onClick={() => {
                  localStorage.setItem("resume", JSON.stringify(r.data));
                  router.push("/resume-generator");
                }}
              >
                Open
              </button>

              {/* ✅ RENAME BUTTON */}
              <button
                className="text-yellow-600"
                onClick={() => {
                  setRenameId(r.id);
                  setNewName(r.name);
                }}
              >
                Rename
              </button>

              <button
                className="text-red-600"
                onClick={() => setDeleteId(r.id)}
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* FLOATING AI */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-purple-600 shadow-xl"
      >
        🤖
      </button>

      {showChat && <AIChat close={() => setShowChat(false)} />}

      {/* LOGOUT MODAL */}
      {showLogoutModal && (
        <ConfirmModal
          title="Confirm Logout"
          onCancel={() => setShowLogoutModal(false)}
          onConfirm={confirmLogout}
        />
      )}

      {/* DELETE MODAL */}
      {deleteId && (
        <ConfirmModal
          title="Delete Resume?"
          onCancel={() => setDeleteId(null)}
          onConfirm={deleteResume}
        />
      )}

      {/* ✅ RENAME MODAL (CUSTOM — NO BROWSER POPUP) */}
      {renameId && (
        <ConfirmModal
          title="Rename Resume"
          onCancel={() => setRenameId(null)}
          onConfirm={renameResume}
        >
          <input
            className="w-full border px-3 py-2 rounded"
            value={newName}
            onChange={(e)=>setNewName(e.target.value)}
          />
        </ConfirmModal>
      )}

    </div>
  );
}

/* ================= CARD ================= */
function Card({ title, color, onClick }: any) {
  return (
    <div className="bg-white/10 p-8 rounded-2xl">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <button onClick={onClick} className={`w-full ${color} py-3 rounded-xl`}>
        Open
      </button>
    </div>
  );
}

/* ================= MODAL ================= */
function ConfirmModal({ title, children, onCancel, onConfirm }: any) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white text-black p-6 rounded-xl w-[320px]">

        <h3 className="font-bold mb-4">{title}</h3>

        {children && <div className="mb-4">{children}</div>}

        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>

          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded">
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
}

/* ================= AI CHAT ================= */
function AIChat({ close }: any) {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const send = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((m:any)=>[...m,userMsg]);
    setInput("");

    const res = await fetch("http://127.0.0.1:8000/api/chat",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify({message:userMsg.text})
    });

    const data = await res.json();

    setMessages((m:any)=>[...m,{role:"ai",text:data.reply}]);
  };

  return (
    <div className="fixed bottom-24 right-6 w-[340px] h-[440px] bg-white text-black rounded-xl shadow-xl flex flex-col">

      <div className="bg-purple-600 text-white p-3 flex justify-between">
        SkillForge AI
        <button onClick={close}>✖</button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto space-y-2">
        {messages.map((m,i)=>(
          <div key={i}
            className={`p-2 rounded max-w-[80%] ${
              m.role==="user"?"bg-purple-200 ml-auto":"bg-gray-200"
            }`}>
            {m.text}
          </div>
        ))}
      </div>

      <div className="p-2 flex gap-2 border-t">
        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          className="flex-1 border rounded px-2"
          onKeyDown={(e)=>e.key==="Enter" && send()}
        />
        <button onClick={send} className="bg-purple-600 text-white px-3 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
