"use client";

import { useAuth } from "@/providers/AuthContext";
import app from "@/services/httpService";
import MytoursPage from "@/templates/MytoursPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
        console.log(error);
        setTours([]);
      }
    }
    fetchTours();
  }, []);

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);

  return <MytoursPage tours={tours} />;
}

export default MyTours;
