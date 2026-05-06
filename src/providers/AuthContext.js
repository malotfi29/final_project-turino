"use client";

import app from "@/services/httpService";

import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await app.get(`/api/user/getProfile`);
        setUser(res.data.user);
      } catch (error) {
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  const editUser = async (data) => {
    try {
      const res = await app.put("/api/user/editProfile", data);
      toast.success(res.data.user.message);
      setUser(res.data.user.user)
      // setUser(res.user)
      // console.log(res);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  const logoutUser=async()=>{
    try {
      const res = await app.post("/api/user/logout");
      console.log(res);
      
     setUser("")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, editUser,logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
