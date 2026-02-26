"use client";

import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import HamburgerMenuIcon from "@/public/icons/HamburgerMenuIcon";
import SigninIcon from "@/public/icons/SigninIcon";
import ProfileIcon from "@/public/icons/ProfileIcon";
import { links } from "@/constants/headerLinks";
import { useState } from "react";
import HamburgerDropDown from "@/modules/HamburgerDropDown";
import LoginModal from "@/modules/LoginModal";
import { useAuth } from "@/providers/AuthContext";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import ArrowDown from "@/public/icons/ArrowDown";
import ProfileModal from "@/modules/ProfileModal";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { user } = useAuth();


  

  return (
    <div className={styles.header}>
      <div className={styles.icons}>
        <span onClick={() => setShowMenu((is) => !is)}>
          <HamburgerMenuIcon />
        </span>

        <HamburgerDropDown setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
      <div className={styles.menu}>
        <Image
          className={styles.img}
          src="/images/Torino.png"
          width={1000}
          height={700}
          alt="Torino"
        />
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      {!!user ? (
        <div className={styles.mobileContainer}>
          <div
            className={styles.userMobile}
            onClick={() => setOpenProfile((is) => !is)}
          >
            <ProfileIcon />
            <span>{toPersianNumbers(user.mobile)}</span>
            <ArrowDown />
          </div>
          <ProfileModal
            openProfile={openProfile}
            setOpenProfile={setOpenProfile}
          />
        </div>
      ) : (
        <div>
          <button
            className={`button-primary ${styles.webButton}`}
            onClick={() => setOpenLogin((is) => !is)}
          >
            <ProfileIcon />
            <span>ورود | ثبت نام</span>
          </button>
          <button
            className={`button-primary ${styles.mobileButton}`}
            onClick={() => setOpenLogin((is) => !is)}
          >
            <SigninIcon />
          </button>
        </div>
      )}

      <LoginModal openLogin={openLogin} setOpenLogin={setOpenLogin} />
    </div>
  );
}

export default Header;
