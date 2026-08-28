import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const API = "http://localhost:8000";

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
    const user = await fetch(`${API}/api/user`, {
      credentials: "include",
      headers: { Accept: "application/json" },
    }).then((r) => r.json());

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
    const res = await fetch(`${API}/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-XSRF-TOKEN": getCookie("XSRF-TOKEN") ?? "",
      },
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

  const login2 = async (authData) => {
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authData),
    });

    if (!response.ok) {
      throw new Error("Credenciais erradas.");
    }

    const data = await response.json();
    setUser({ role: data.role });
    localStorage.setItem("user", JSON.stringify(data));
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
