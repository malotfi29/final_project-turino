import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
import { toPersianNumbers } from "@/utils/toPersionNumber";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__container}>
          <div className={styles.footer__columns}>
            <ul>
              <h3>تورینو</h3>
              <li>
                <Link href="/">درباره ما</Link>
              </li>
              <li>
                <Link href="/">تماس با ما</Link>
              </li>
              <li>
                <Link href="/">چرا تورینو</Link>
              </li>
              <li>
                <Link href="/">بیمه مسافرتی</Link>
              </li>
            </ul>
            <ul>
              <h3>خدمات مشتریان</h3>
              <li>
                <Link href="/">پشتیبانی آنلاین</Link>
              </li>
              <li>
                <Link href="/">راهنمای خرید</Link>
              </li>
              <li>
                <Link href="/">راهنمای استرداد</Link>
              </li>
              <li>
                <Link href="/">پرسش و پاسخ</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__brand}>
            <div className={styles.footer__logos}>
              <Image
                className={styles.img}
                src="/images/samandehi1.png"
                alt="samandehi"
                width={1000}
                height={700}
              />
              <Image
                className={styles.img}
                src="/images/samandehi2.png"
                alt="samandehi"
                width={1000}
                height={700}
              />
              <Image
                className={styles.img}
                src="/images/samandehi3.png"
                alt="samandehi"
                width={1000}
                height={700}
              />
              <Image
                className={styles.img}
                src="/images/samandehi4.png"
                alt="samandehi"
                width={1000}
                height={700}
              />
              <Image
                className={styles.img}
                src="/images/samandehi5.png"
                alt="samandehi"
                width={1000}
                height={700}
              />
            </div>
            <div className={styles.footer__support}>
              <Image
                className={styles.img}
                src="/images/Torino.png"
                alt="Torino"
                width={1000}
                height={700}
              />
              <p>تلفن پشتیبانی:{toPersianNumbers("8574-021")}</p>
            </div>
          </div>
        </div>

        <div className={styles.footer__copyright}>
          <p>کلیه حقوق این وبسایت متعلق به تورینو می باشد</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
