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
import { useState } from "react";
import LoginModal from "@/modules/LoginModal";



function TourDetailsPage({ data }) {
  const [openLogin, setOpenLogin] = useState(false);
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
    //  toast.error(error.message, { style: { fontSize: "14px" } });
     if(error.status===401) setOpenLogin(true)
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
          <h2> {data.title} </h2>
          <p>
            {duration}days and {duration - 1}
            night
          </p>
        </div>
        <div className={styles.mainOptions}>
          <p>
            <UserTicket />
            Departure Tour Guide
          </p>
          <p>
            <Map />
            Travel Itinerary
          </p>
          <p>
            <MedalStar />
            Quality Assurance
          </p>
        </div>

        <div className={styles.options}>
          <div>
            <p>
              <Routing />
              Origin
            </p>
            <span>{data.origin.value}</span>
          </div>
          <div>
            <p>
              <Calender />
              Tour Start Date
            </p>
            <span>
              {new Date(data.startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
          </div>
          <div>
            <p>
              <Calender />
              Return Date
            </p>
            <span>
              {new Date(data.endDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </span>
          </div>
          <div>
            <p>
              <Bus />
              Transportation
            </p>
            <span>{data.fleetVehicle}</span>
          </div>
          <div>
            <p>
              <ProfileUser />
              Capacity
            </p>
            <span>{data.availableSeats} People </span>
          </div>
          <div>
            <p>
              <Secure /> Insurance
            </p>
            <span>
              {data.insurance
                ? `Insurance: 50,000 Dinars`
: "Not Included"}
            </span>
          </div>
        </div>

        <div className={styles.price}>
          <p>
            <span>{(data.price)}</span>$
          </p>
          <button onClick={handleBookingTour}>Book Now</button>
      <LoginModal openLogin={openLogin} setOpenLogin={setOpenLogin}/>
        </div>
      </div>
    </div>
  );
}

export default TourDetailsPage;
