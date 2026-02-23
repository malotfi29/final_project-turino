import Image from "next/image";
import styles from "./HomePage.module.css";
import SearchTour from "@/modules/SearchTour";
import AllToures from "@/modules/AllToures";
import { Button } from "@headlessui/react";
import CallIcon from "@/public/icons/CallIcon";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import FillCallIcon from "@/public/icons/FillCallIcon";
import PhoneContainer from "@/modules/PhoneContainer";
import WhyTorino from "@/modules/WhyTorino";

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
        <h2>
          <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
        </h2>
        <SearchTour />
      </div>
      <div className={styles.toures}>
        <h2>همه ی تورها</h2>
        <AllToures />
      </div>
      <PhoneContainer />
      <div className={styles.whyTorino}>
        <WhyTorino/>
      </div>
    </div>
  );
}

export default HomePage;
