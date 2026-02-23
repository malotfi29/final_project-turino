import Image from "next/image";
import styles from "./HomePage.module.css";
import SearchTour from "@/modules/SearchTour";
import AllToures from "@/modules/AllToures";

function HomePage() {
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
        <h2><span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی</h2>
        <SearchTour />
      </div>
      <div>
        <h2>همه ی تورها</h2>
        <AllToures/>
      </div>
    </div>
  );
}

export default HomePage;
