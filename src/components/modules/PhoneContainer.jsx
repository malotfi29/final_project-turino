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
        alt="Tourino Contact Number"
      />
      <p className={styles.up}>
      Book by Phone with
        <span> Torino </span>
      </p>
      <p className={styles.down}>Wherever You Want to Go!</p>
    </div>

    <div className={styles.phone}>
      <p>
        <span>021-1840</span>
        <FillCallIcon />
      </p>
      <button>More Information</button>
    </div>
  </div>
  )
}

export default PhoneContainer
