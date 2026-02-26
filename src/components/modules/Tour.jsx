import Image from "next/image";
import styles from "./Tour.module.css";
import { getDuration } from "@/utils/getDuration";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersionNumber";
import shortText from "@/utils/shortText";
import Link from "next/link";

function Tour({ tour }) {
  return (
    <div className={styles.tour}>
      <div className={styles.tourBody}>
        <Image
          className={styles.tourImg}
          src={tour.image}
          width={1000}
          height={700}
          alt={tour.title}
          unoptimized
        />
        <div className={styles.desc}>
          <h2>{tour.title}</h2>
          <div>
            <span>
              {new Date(tour.startDate).toLocaleDateString("fa-IR", {
                month: "long",
              })}{" "}
              ماه
            </span>
            <span>
              {toPersianNumbers(getDuration(tour.startDate, tour.endDate))} روز-
            </span>
            <span>{shortText(tour.options.join(" "), 15)}</span>
          </div>
        </div>
      </div>
      <div className={styles.tourFooter}>
        <Link href={`/tourDetails/${tour.id}`} >
        <button >رزرو</button>
        </Link>
        <p>
          <span>{toPersianNumbersWithComma(tour.price)}</span> تومان
        </p>
      </div>
    </div>
  );
}

export default Tour;
