import Image from "next/image";
import styles from "./HomePage.module.css";
import AllToures from "@/modules/AllToures";
import PhoneContainer from "@/modules/PhoneContainer";
import WhyTorino from "@/modules/WhyTorino";
import Footer from "@/modules/Footer";

async function HomePage() {
  return (
    <div className={styles.container}>
      <Image
        className={styles.banner}
        src="/images/banner.png"
        width={1000}
        height={700}
        alt="banner"
      />

      <div className={styles.toures}>
        <AllToures />
      </div>
      <PhoneContainer />
      <div className={styles.whyTorino}>
        <WhyTorino />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
