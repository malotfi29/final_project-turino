import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersionNumber";
import styles from "./MyTour.module.css";

const vehicles = {
  bus: "اتوبوس",
  ship: "کشتی",
  train: "قطار",
  airplane: "هواپیما",
  SUV: "اتومبیل استیشن",
};

function MyTour({ tour }) {
 const tourDate=new Date(tour.endDate)
 const now = new Date();
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <div>
          <p className={styles.title}>{tour.title}</p>
          <p>Transportation Type: <span className={styles.TransportationType}> {tour.fleetVehicle}</span> </p>
          <p>
            {tour.origin.value} to {tour.destination.value}
            &nbsp; &nbsp; 
            <span className={styles.date}>
              {new Date(tour.startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </span>
          </p>
          <p>
          Return Date:
          &nbsp;
            <span className={styles.date}>
              {new Date(tour.endDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </span>
          </p>
        </div>
        <button className={tourDate<=now?"badge-success":"badge-pending"}>
          {
            tourDate<=now?"Completed":"`In Progress`"
          }
        </button>
      </div>
      <div className={styles.price}>
        <p>
          Tour number <span>{tour.id.slice(1, 8)}</span>
        </p>
        <p>
        Amount Paid
          <span>
            {tour.price} <span>$</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default MyTour;
