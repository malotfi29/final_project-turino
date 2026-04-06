"use client";
import { useAuth } from "@/providers/AuthContext";
import ProfilePage from "@/templates/ProfilePage";
import { useRouter } from "next/navigation";

function Profile() {
  const { user } = useAuth();

  if (!user) {
    window.location.replace("/");
    return;
  }

  return <ProfilePage user={user} />;
}

export default Profile;
