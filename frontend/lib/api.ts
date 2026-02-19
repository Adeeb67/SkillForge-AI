const API_URL = "https://skillforge-backend-j1w2.onrender.com";

// ---------------- SIGNUP ----------------
export async function signup(email: string, password: string) {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
}

// ---------------- LOGIN ----------------
export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
}

// ---------------- GET USER ----------------
export async function getMe() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}

// ---------------- ADD XP ----------------
export async function addXP(amount: number) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_URL}/add-xp?amount=${amount}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}

// ---------------- AI TUTOR ----------------
export async function askAITutor(question: string) {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_URL}/ai-tutor?question=${encodeURIComponent(question)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
}

// ---------------- SMART DEBUGGER ----------------
export async function debugCode(code: string) {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `${API_URL}/debug-code?code=${encodeURIComponent(code)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.json();
}
