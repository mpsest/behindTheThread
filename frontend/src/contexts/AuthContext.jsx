import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

const USER_TYPE_ADMIN = 1;

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null;
  });

  useEffect(() => {
    fetchUser();
  }, []);

async function fetchUser() {
  const res = await fetch(`${API}/api/user`, {
    credentials: "include",
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    setUser(null);
    localStorage.removeItem("user");
    return null;
  }

  const user = await res.json();
  setUser(user);
  localStorage.setItem("user", JSON.stringify(user));

  return user;
}

  async function login({ email, password }) {
    // 1. Get the CSRF cookie (sets XSRF-TOKEN + laravel_session)
    await fetch(`${API}/sanctum/csrf-cookie`, {
      credentials: "include",
    });

    // 2. Post credentials with the token echoed back as a header
    const res = await makeRequest("login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      // 422 → { message, errors: { email: [...] } }
      const err = await res.json().catch(() => null);
      throw new Error(err?.message ?? `Login failed (${res.status})`);
    }

    // 3. Session cookie is now set; fetch the user
    await fetchUser();

    return true;
  }

  const makeRequest = async (url, params) => {
    const response = await fetch(`${API}/${url}`, {
      ...params,
      credentials: "include",
      headers: {
        ...(params?.headers || {}),
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") ?? "",
      },
    });

    return response;
  };

  function logout() {
    // Limpa já o estado local para a UI reagir de imediato.
    localStorage.removeItem("user");
    setUser(null);

    // Termina a sessão no servidor sem bloquear a navegação.
    makeRequest("logout", { method: "POST" }).catch((err) => {
      console.error("Erro ao terminar sessão no servidor:", err);
    });
  }

  const isAdmin = user?.user_type === USER_TYPE_ADMIN;

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout, makeRequest }}>
      {children}
    </AuthContext.Provider>
  );
};