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

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, makeRequest }}>
      {children}
    </AuthContext.Provider>
  );
};
