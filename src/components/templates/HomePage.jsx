import Image from "next/image";
import styles from "./HomePage.module.css";
import SearchTour from "@/modules/SearchTour";
import AllToures from "@/modules/AllToures";
import PhoneContainer from "@/modules/PhoneContainer";
import WhyTorino from "@/modules/WhyTorino";
import axios from "axios";
import Footer from "@/modules/Footer";

async function HomePage() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/tour/get`
  );
  const data = res.data;
  return (
    <div className={styles.container}>
      <Image
        className={styles.banner}
        src="/images/banner.png"
        width={1000}
        height={700}
        alt="banner"
      />
      <div className={styles.search}>
        <h2>
          <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
        </h2>
        <SearchTour data={data} />
      </div>
      <div className={styles.toures}>
        <h2>همه ی تورها</h2>
        <AllToures data={data} />
      </div>
      <PhoneContainer />
      <div className={styles.whyTorino}>
        <WhyTorino/>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
