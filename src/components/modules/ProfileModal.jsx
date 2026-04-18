"use client";
import { useAuth } from "@/providers/AuthContext";
import styles from "./ProfileModal.module.css";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import ProfileIcon from "@/public/icons/ProfileIcon";
import ProfileWhite from "@/public/icons/ProfileWhite";
import Logout from "@/public/icons/Logout";
import Link from "next/link";

function ProfileModal({ openProfile, setOpenProfile }) {
  const { user, logoutUser } = useAuth();

  const logoutHandler = async () => {
    logoutUser();
    setOpenProfile((is) => !is);
  };

  const closeModal=(e)=>{
    e.stopPropagation()
    setOpenProfile((is) => !is)
  }

  if (!openProfile) return null;
  return (
    <div >
      <div
        className={styles.backdrop}
        onClick={closeModal}
      ></div>
      <div className={styles.container}>
        <p
          className={styles.number}
          onClick={() => setOpenProfile((is) => !is)}
        >
          <span>
            <ProfileIcon
              color="rgba(105, 105, 105, 1)"
              width="18"
              height="18"
            />
          </span>
          {toPersianNumbers(user.mobile)}{" "}
        </p>
        <Link href="/profile" onClick={() => setOpenProfile((is) => !is)}>
          <p className={styles.profile}>
            <span>
              <ProfileWhite />
            </span>
            اطلاعات حساب کاربری
          </p>
        </Link>
        <p className={styles.logout} onClick={logoutHandler}>
          <span>
            <Logout />
          </span>
          خروج از حساب کاربری
        </p>
      </div>
    </div>
  );
}

export default ProfileModal;
