import { links } from "@/constants/headerLinks";
import styles from "./HamburgerDropDown.module.css";
import Link from "next/link";
import { headerIcons } from "@/constants/headerIcons";

function HamburgerDropDown({ setShowMenu,showMenu }) {
  return (
    <div className={`${styles.container} ${showMenu? styles.active : ""}`}>
      <div className={styles.backdrop} onClick={() => setShowMenu(false)}></div>
      <div className={styles.links}>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
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
