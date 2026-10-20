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
          Why <span>Torino</span>?
        </h1>
        <h3>Nature & Historical Tours</h3>
        <p>
          Whether you want to explore natural wonders, camp under the stars, or
          stay in a traditional eco-lodge, our nature tours offer unforgettable
          experiences. If you're interested in discovering cultural landmarks
          and historical sites, our cultural and historical tours are the
          perfect choice.
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
                <Image src={img} fill alt="Torino" />
              </div>
            );
          })}
        </div>

        <div className={styles.controls}>
          <button
            className="button-primary"
            onClick={handleIncreasePictureNumber}
          >
            Previous
          </button>
          <p>{index + 1}</p>
          <button
            className="button-primary"
            onClick={handledecreasePictureNumber}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyTorino;
