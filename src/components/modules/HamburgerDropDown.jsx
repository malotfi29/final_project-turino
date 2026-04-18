"use client";
import { links } from "@/constants/headerLinks";
import styles from "./HamburgerDropDown.module.css";
import Link from "next/link";
import { headerIcons } from "@/constants/headerIcons";
import { usePathname } from "next/navigation";

function HamburgerDropDown({ setShowMenu, showMenu }) {
  const pathName = usePathname();
  

  return (
    <div className={`${styles.container} ${showMenu ? styles.active : ""}`}>
      <div className={styles.backdrop} onClick={() => setShowMenu(false)}></div>
      <div className={styles.links}>
        <ul>
          {links.map((link, index) => (
            <li
              key={index}
              onClick={() => setShowMenu(false)}
              className={pathName === link.href ? styles.activeLink : ""}
            >
              <Link href={link.href}>
                <span>{headerIcons[link.text]}</span>
                <span>{link.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HamburgerDropDown;
