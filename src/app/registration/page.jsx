"use client";
import { useAuth } from "@/providers/AuthContext";
import app from "@/services/httpService";
import RegistrationPage from "@/templates/RegistrationPage";
import { useEffect, useState } from "react";

function Registration() {
  const [basket, setBasket] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    async function fetchBasket() {
      try {
        const res = await app.get(`/api/tour/basket`);
        setBasket(res.data.basket);
      } catch (error) {
        console.log(error);
        setBasket(null);
      }
    }
    fetchBasket();
  }, []);
 

  return <RegistrationPage user={user} basket={basket} />;
}

export default Registration;
