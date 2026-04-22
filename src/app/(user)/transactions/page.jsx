"use client";

import { useAuth } from "@/providers/AuthContext";
import app from "@/services/httpService";
import TransactionsPage from "@/templates/TransactionsPage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Transactions() {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState([]);
  const router = useRouter();
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const res = await app.get(`/api/user/transactions`);
        setTransactions(res.data.data);
      } catch (error) {
        toast.error(error.message, {
          style: { fontSize: "16px" },
        });
        setTransactions([]);
      }
    }
    fetchTransactions();
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
  return <TransactionsPage transactions={transactions} />;
}

export default Transactions;
