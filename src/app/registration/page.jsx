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
    async function fetchBasket() {
      try {
        const res = await app.get(`/api/tour/basket`);
        setBasket(res.data.basket);
      } catch (error) {
     
        toast.error(error.message, {
          style: { fontSize: "16px",color:"red" },
        });
        setBasket(null);
        router.replace("/");
      }
    }
    fetchBasket();
  }, [router]);
  
  

  return <RegistrationPage user={user} basket={basket} />;
}

export default Registration;
