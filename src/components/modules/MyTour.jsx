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
          <p>{tour.title}</p>
          <p>سفر با {vehicles[tour.fleetVehicle]}</p>
          <p>
            {tour.origin.value} به {tour.destination.value}{" "}
            <span>
              {new Date(tour.startDate).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </span>
          </p>
          <p>
            تاریخ برگشت{" "}
            <span>
              {new Date(tour.endDate).toLocaleDateString("fa-IR", {
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
            tourDate<=now?"به اتمام رسیده":"در حال برگزاری"
          }
        </button>
      </div>
      <div className={styles.price}>
        <p>
          شماره تور <span>{toPersianNumbers(tour.id.slice(1, 8))}</span>
        </p>
        <p>
          مبلغ پرداخت شده{" "}
          <span>
            {toPersianNumbersWithComma(tour.price)} <span>تومان</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default MyTour;
