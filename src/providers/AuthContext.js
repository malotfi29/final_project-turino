"use client";

import app from "@/services/httpService";


import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await app.get(`/api/user/getProfile`, {});
        
        setUser(res.data.user);
      } catch (error) {
        setUser(null);
      }
    }
    fetchUser();
  }, []);


  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
