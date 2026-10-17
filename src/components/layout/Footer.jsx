import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__container}>
          <div className={styles.footer__columns}>
            <ul>
              <h3>Tourino</h3>
              <li><Link href="/">About Us</Link></li>
              <li><Link href="/">Contact Us</Link></li>
              <li><Link href="/">Why Tourino</Link></li>
              <li><Link href="/">Travel Insurance</Link></li>
            </ul>

            <ul>
              <h3>Customer Service</h3>
              <li><Link href="/">Online Support</Link></li>
              <li><Link href="/">Booking Guide</Link></li>
              <li><Link href="/">Cancellation & Refund Policy</Link></li>
              <li><Link href="/">FAQ</Link></li>
            </ul>
          </div>

          <div className={styles.footer__brand}>
            {/* <div className={styles.footer__logos}>
              <Image className={styles.img} src="/images/samandehi1.png" alt="Certification" width={1000} height={700} />
              <Image className={styles.img} src="/images/samandehi2.png" alt="Certification" width={1000} height={700} />
              <Image className={styles.img} src="/images/samandehi3.png" alt="Certification" width={1000} height={700} />
              <Image className={styles.img} src="/images/samandehi4.png" alt="Certification" width={1000} height={700} />
              <Image className={styles.img} src="/images/samandehi5.png" alt="Certification" width={1000} height={700} />
            </div> */}

            <div className={styles.footer__support}>
              <Image
                className={styles.img}
                src="/images/Torino.png"
                alt="Tourino"
                width={1000}
                height={700}
              />
              <p>Customer Support: 021-8574</p>
            </div>
          </div>
        </div>

        <div className={styles.footer__copyright}>
          <p>All rights reserved. © Torino</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;