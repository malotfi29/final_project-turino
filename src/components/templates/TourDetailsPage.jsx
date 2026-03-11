"use client";

import Image from "next/image";
import styles from "./TourDetailsPage.module.css";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersionNumber";
import { getDuration } from "@/utils/getDuration";
import UserTicket from "@/public/icons/UserTicket";
import Map from "@/public/icons/Map";
import MedalStar from "@/public/icons/MedalStar";
import Routing from "@/public/icons/Routing";
import Calender from "@/public/icons/Calender";
import Bus from "@/public/icons/Bus";
import ProfileUser from "@/public/icons/ProfileUser";
import Secure from "@/public/icons/Secure";
import app from "@/services/httpService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const vehicles = {
  bus: "اتوبوس",
  ship: "کشتی",
  train: "قطار",
  airplain: "هواپیما",
  SUV: "اتومبیل استیشن",
};

function TourDetailsPage({ data }) {
  const duration = getDuration(data?.startDate, data?.endDate);
  const router = useRouter();

  const handleBookingTour = async () => {
    try {
      const res = await app.put("/api/tour/booking", data.id);

      if (res.status === 200) {
        toast.success(res.data.data.message, { style: { fontSize: "14px" } });
        router.push("/registration");
      }
    } catch (error) {
      console.log(error);

      toast.error(error.message, { style: { fontSize: "14px" } });
    }
  };

  return (
    <div className={styles.tourContainer}>
      <div className={styles.innerContainer}>
        <Image
          className={styles.tourImg}
          src={data.image}
          width={500}
          height={400}
          alt={data.title}
          unoptimized
        />
        <div className={styles.tourTitle}>
          <h2> تور {data.title} </h2>
          <p>
            {toPersianNumbers(duration)}روز و {toPersianNumbers(duration - 1)}{" "}
            شب
          </p>
        </div>
        <div className={styles.mainOptions}>
          <p>
            <UserTicket />
            تورلیدر از مبدا
          </p>
          <p>
            <Map />
            برنامه سفر
          </p>
          <p>
            <MedalStar />
            تضمین کیفیت
          </p>
        </div>

        <div className={styles.options}>
          <div>
            <p>
              <Routing />
              مبدا
            </p>
            <span>{data.origin.value}</span>
          </div>
          <div>
            <p>
              <Calender />
              تاریخ رفت
            </p>
            <span>
              {new Date(data.startDate).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div>
            <p>
              <Calender />
              تاریخ برگشت
            </p>
            <span>
              {new Date(data.endDate).toLocaleDateString("fa-IR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div>
            <p>
              <Bus />
              حمل و نقل
            </p>
            <span>{vehicles[data.fleetVehicle]}</span>
          </div>
          <div>
            <p>
              <ProfileUser />
              ظرفیت
            </p>
            <span>{toPersianNumbers(data.availableSeats)} نفر </span>
          </div>
          <div>
            <p>
              <Secure /> بیمه
            </p>
            <span>
              {data.insurance
                ? `بیمه  ${toPersianNumbers("50")} هزار دیناری`
                : "ندارد"}
            </span>
          </div>
        </div>

        <div className={styles.price}>
          <p>
            <span>{toPersianNumbersWithComma(data.price)}</span>تومان
          </p>
          <button onClick={handleBookingTour}>رزرو و خرید</button>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;
