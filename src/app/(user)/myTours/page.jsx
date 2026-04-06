"use client";

import app from "@/services/httpService";
import MytoursPage from "@/templates/MytoursPage";
import { useEffect, useState } from "react";

function MyTours() {
  const[tours,setTours]=useState([])
  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await app.get(`/api/user/tours`);
        setTours(res.data.data)
        
      } catch (error) {
        console.log(error);
        setTours([])
      }
    }
    fetchTours();
  }, []);

  return <MytoursPage tours={tours} />;
}

export default MyTours;
