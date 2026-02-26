"use client";
import { useAuth } from "@/providers/AuthContext";
import styles from "./ProfileModal.module.css";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import ProfileIcon from "@/public/icons/ProfileIcon";
import ProfileWhite from "@/public/icons/ProfileWhite";
import Logout from "@/public/icons/Logout";
import app from "@/services/httpService";

function ProfileModal({ openProfile, setOpenProfile }) {
  const { user } = useAuth();
  
  const logoutHandler=async()=>{
    try {
        const res=await app.post("/api/user/logout")
        window.location.reload()
    } catch (error) {
        console.log(error);
        
    }
   
  }

  if (!openProfile) return;
  return (
    <div className={styles.container}>
      <p className={styles.number}>
        <span>
          <ProfileIcon color="rgba(105, 105, 105, 1)" width="18" height="18" />
        </span>
        {toPersianNumbers(user.mobile)}{" "}
      </p>
      <p className={styles.profile}>
        <span>
          <ProfileWhite />
        </span>
        اطلاعات حساب کاربری
      </p>
      <p className={styles.logout} onClick={logoutHandler}>
        <span>
          <Logout />
        </span>
          خروج از حساب کاربری
      </p>
    </div>
  );
}

export default ProfileModal;
