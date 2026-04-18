"use client";
import { useState } from "react";
import styles from "./WhyTorino.module.css";
import ArrowLeft from "@/public/icons/ArrowLeft";
import ArrowRight from "@/public/icons/ArrowRight";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import Image from "next/image";

const images = [
  "/images/p1.png",
  "/images/p2.png",
  "/images/p3.png",
  "/images/p4.png",
];

function WhyTorino() {
  const [index, setIndex] = useState(1);
  const handledecreasePictureNumber = () => {
    if (index === 3) return;
    setIndex((num) => num + 1);
  };
  const handleIncreasePictureNumber = () => {
    if (index === 0) return;
    setIndex((num) => num - 1);
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

      <div className={styles.wrapper}>
        <div className={styles.slider}>
          {images.map((img, i) => {
            const position = i - index;

            return (
              <div
                key={i}
                className={styles.card}
                style={{
                  transform: `translateX(${position * 40}px) scale(${1 - Math.abs(position) * 0.05})`,
                  zIndex: images.length - Math.abs(position),
                }}
              >
                <Image src={img} fill alt="تورینو" />
              </div>
            );
          })}
        </div>

        <div className={styles.controls}>
          <button
            className="button-primary"
            onClick={handledecreasePictureNumber}
          >
            بعدی
          </button>
          <p>{toPersianNumbers(index + 1)}</p>
          <button
            className="button-primary"
            onClick={handleIncreasePictureNumber}
          >
            قبلی
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyTorino;
