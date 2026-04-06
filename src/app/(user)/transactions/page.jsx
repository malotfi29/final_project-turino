"use client"

import app from "@/services/httpService";
import TransactionsPage from "@/templates/TransactionsPage"
import { useEffect, useState } from "react";


function Transactions() {
  const[transactions,setTransactions]=useState([])
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
  return (
    <TransactionsPage transactions={transactions} />
  )
}

export default Transactions
