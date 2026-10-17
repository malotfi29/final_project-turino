"use client";
import styles from "../../app/(user)/layout.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { title: "Profile", href: "/profile" },
  { title: "My Tours", href: "/myTours" },
  { title:"Transactions" , href: "/transactions" },
];

function UserLayoutLinks() {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <ul className={styles.links}>
      {links.map((link, index) => (
        <Link
        key={index}
        href={link.href}
        className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
      >
        {link.title}
      </Link>
      ))}
    </ul>
  );
}

export default UserLayoutLinks;
