

import styles from "./layout.module.css";
import UserLayoutLinks from "@/modules/UserLayoutLinks";


export const metadata = {
  title: "پروفایل",
};



function layout({ children }) {

  return (
    <div className={styles.container}>
   <UserLayoutLinks/>
      <div className={styles.children}>{children}</div>
    </div>
  );
}

export default layout;


