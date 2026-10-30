import Image from "next/image";
import Link from "next/link";
import styles from "./Tour.module.css";
import { getDuration } from "@/utils/getDuration";
import shortText from "@/utils/shortText";

function Tour({ tour }) {
  const tourUrl = `/tourDetails/${tour.id}`;
  const destination = tour.destination?.value || tour.destination?.name;
  const origin = tour.origin?.value || tour.origin?.name;
  const duration = getDuration(tour.startDate, tour.endDate);
  const startDate = new Date(tour.startDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const options = Array.isArray(tour.options) ? tour.options.join(" ") : "";

  return (
    <article className={styles.tour}>
      <Link href={tourUrl} className={styles.cardLink}>
        <div className={styles.imageWrap}>
          <Image
            className={styles.tourImg}
            src={tour.image}
            fill
            sizes="(max-width: 600px) 82vw, (max-width: 900px) 44vw, 280px"
            alt={tour.title}
            unoptimized
          />
          {destination && <span className={styles.destination}>{destination}</span>}
        </div>
        <div className={styles.desc}>
          {origin && destination && <p className={styles.route}>{origin} <span aria-hidden="true">to</span> {destination}</p>}
          <h3>{tour.title}</h3>
          <p className={styles.tripInfo}>
            {duration} {duration === 1 ? "day" : "days"}
            {startDate && <> <span aria-hidden="true">|</span> Starts {startDate}</>}
          </p>
          {!!options && <p className={styles.options}>{shortText(options, 54)}</p>}
        </div>
      </Link>
      <div className={styles.tourFooter}>
        <p className={styles.price}><span>From</span><strong>${tour.price}</strong><span>per person</span></p>
        <Link href={tourUrl} className={styles.bookLink}>View tour <span aria-hidden="true">&gt;</span></Link>
      </div>
    </article>
  );
}

export default Tour;
