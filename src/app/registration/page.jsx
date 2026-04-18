"use client";
import { useAuth } from "@/providers/AuthContext";
import app from "@/services/httpService";
import RegistrationPage from "@/templates/RegistrationPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Registration() {
  const router = useRouter();
  const [basket, setBasket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.replace("/");
     
    }
  }, [user, router]);

  useEffect(() => {
    async function fetchBasket() {
      try {
        const res = await app.get(`/api/tour/basket`);
        setBasket(res.data.basket);
      } catch (error) {
        console.log(error);
        toast(error.message);
        setBasket(null);
      }
    }
    fetchBasket();
  }, []);

  return <RegistrationPage user={user} basket={basket} />;
}

export default Registration;
