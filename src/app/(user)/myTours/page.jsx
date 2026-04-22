"use client";

import { useAuth } from "@/providers/AuthContext";
import app from "@/services/httpService";
import MytoursPage from "@/templates/MytoursPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function MyTours() {
  const { user } = useAuth();
  const [tours, setTours] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await app.get(`/api/user/tours`);
        
        
        setTours(res.data.data);
      } catch (error) {
        toast.error(error.message, {
          style: { fontSize: "16px" },
        });
        setTours([]);
      }
    }
    fetchTours();
  }, []);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await app.get(`/api/user/getProfile`);
      } catch (error) {
        router.replace("/");
      }
    }
    getUser();
  }, [router]);

  if (!user) return null;
  return <MytoursPage tours={tours} />;
}

export default MyTours;
