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
    <header className={styles.header}>
      <div className={styles.icons}>
        <button
          className={styles.menuToggle}
          type="button"
          aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={showMenu}
          onClick={() => setShowMenu((is) => !is)}
        >
          <HamburgerMenuIcon />
        </button>

        <HamburgerDropDown setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
      <div className={styles.menu}>
        <Link href="/">
       
        <Image
          className={styles.img}
          src="/images/Torino.png"
          loading="eager"
          width={1000}
          height={700}
          alt="Torino"
        />
         </Link>
        <ul className={styles.desktopLinks}>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.quickLinks}>
        <Link href="/#tours" aria-label="Search tours" className={styles.iconLink}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>
        </Link>
        <Link href="/myTours" aria-label="My tours" className={styles.iconLink}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.1-8.8 11-8.8 11s-8.8-5.9-8.8-11a4.7 4.7 0 0 1 8.8-2.2 4.7 4.7 0 0 1 8.8 2.2Z"/></svg>
        </Link>
      </div>
      {!!user ? (
        <div className={styles.mobileContainer}>
          <div
            className={styles.userMobile}
            onClick={() => setOpenProfile((is) => !is)}
          >
            <ProfileIcon />
            <span>{user.mobile}</span>
            <span
              className={`${styles.openArrow} ${openProfile ? styles.arrow : ""}`}
            >
              <ArrowDown />
            </span>
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
            <span>Log In | Sign Up</span>
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
    </header>
  );
}

export default Header;
