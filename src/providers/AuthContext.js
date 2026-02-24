"use client";

import Cookies from "js-cookie";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || "";
    const token = Cookies.get("accessToken");
    if (storedUser && token) {
      setUser(storedUser);
    }
  }, []);

  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
