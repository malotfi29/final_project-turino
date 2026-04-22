"use client";

import { useAuth } from "@/providers/AuthContext";
import app from "@/services/httpService";
import ProfilePage from "@/templates/ProfilePage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

function Profile() {
  const { user } = useAuth();
  const router = useRouter();
  useEffect(() => {
    async function getUser() {
      try {
        const res = await app.get(`/api/user/getProfile`);
      } catch (error) {
        toast.error(error.message, {
          style: { fontSize: "16px", color: "red" },
        });

        router.replace("/");
      }
    }
    getUser();
  }, [router]);

  if (!user) return null;
  return <ProfilePage user={user} />;
}

export default Profile;
