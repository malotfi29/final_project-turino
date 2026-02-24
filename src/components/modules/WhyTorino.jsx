"use client";
import { useState } from "react";
import styles from "./WhyTorino.module.css";
import ArrowLeft from "@/public/icons/ArrowLeft";
import ArrowRight from "@/public/icons/ArrowRight";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import Image from "next/image";

const pictures = [
  { id: 1, img: "/images/p4.png" },
  { id: 2, img: "/images/p3.png" },
  { id: 3, img: "/images/p2.png" },
  { id: 4, img: "/images/p1.png" },
];

function WhyTorino() {
  const [pictureNumber, setPictureNumber] = useState(1);
  const handledecreasePictureNumber = () => {
    if (pictureNumber === 4) return;
    setPictureNumber((num) => num + 1);
  };
  const handleIncreasePictureNumber = () => {
    if (pictureNumber === 1) return;
    setPictureNumber((num) => num - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h1>
          چرا <span>تورینو</span>؟
        </h1>
        <h3>تور طبیعت گردی و تاریخی</h3>
        <p>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div className={styles.paginatePictures}>
        <div className={styles.showPictures}>
          {pictures.map((p) => (
            <Image
              className={styles.img}
              key={p.id}
              src={p.img}
              width={500}
              height={800}
              alt="تورینو"
            />
          ))}
        </div>
        <div className={styles.pagination}>
          <button onClick={handledecreasePictureNumber}>
            <ArrowRight width="36" height="36" />
          </button>
          <p>
            {toPersianNumbers(pictureNumber)}/{toPersianNumbers("4")}
          </p>
          <button onClick={handleIncreasePictureNumber}>
            <ArrowLeft width="36" height="36" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyTorino;
