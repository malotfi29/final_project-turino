import Link from "next/link"
import styles from "./layout.module.css"

function layout({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.links} >
        <Link href="/profile" >پروفایل</Link>
        <Link href="/myTours" >تورهای من</Link>
        <Link href="/transactions" >تراکنش ها</Link>

      </div>
      <div className={styles.children} >{children}</div>
    </div>
  )
}

export default layout
