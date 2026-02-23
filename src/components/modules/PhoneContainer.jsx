import Image from "next/image"
import styles from "./PhoneContainer.module.css"
import FillCallIcon from "@/public/icons/FillCallIcon"
import { toPersianNumbers } from "@/utils/toPersionNumber"

function PhoneContainer() {
  return (
    <div className={styles.phoneContainer}>
    <div className={styles.desc}>
      <Image
        className={styles.img}
        src="/images/professional-cartoon-man.png"
        width={1000}
        height={700}
        alt="شماره تماس تورینو"
      />
      <p className={styles.up}>
        خرید تلفنی از
        <span> تورینو </span>
      </p>
      <p className={styles.down}>به هرکجا که میخواهید!</p>
    </div>

    <div className={styles.phone}>
      <p>
        <span>{toPersianNumbers("021-1840")}</span>
        <FillCallIcon />
      </p>
      <button>اطلاعات بیشتر</button>
    </div>
  </div>
  )
}

export default PhoneContainer
