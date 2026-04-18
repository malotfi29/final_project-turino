"use client";
import { useAuth } from "@/providers/AuthContext";
import ProfilePage from "@/templates/ProfilePage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Profile() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user, router]);
  return <ProfilePage user={user} />;
}

export default Profile;
