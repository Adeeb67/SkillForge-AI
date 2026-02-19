const API_URL = "http://127.0.0.1:8000";

export async function signup(email: string, password: string) {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  return data;
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  return data;
}
export async function getMe() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://127.0.0.1:8000/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
export async function addXP(amount: number) {
  const token = localStorage.getItem("token");

  const res = await fetch("http://127.0.0.1:8000/add-xp?amount=" + amount, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
}
