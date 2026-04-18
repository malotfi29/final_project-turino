"use client"

import { useAuth } from "@/providers/AuthContext";
import app from "@/services/httpService";
import TransactionsPage from "@/templates/TransactionsPage"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


function Transactions() {
  const { user } = useAuth();
  const[transactions,setTransactions]=useState([])
  const router = useRouter();
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const res = await app.get(`/api/user/transactions`);
        setTransactions(res.data.data)
        
      } catch (error) {
        console.log(error);
        setTransactions([])
      }
    }
    fetchTransactions();
  }, []);

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);

  return (
    <TransactionsPage transactions={transactions} />
  )
}

export default Transactions
