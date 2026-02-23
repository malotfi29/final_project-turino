"use client";
import { useToures } from "@/utils/useQueries";
import styles from "./AllToures.module.css";
import Image from "next/image";

function AllToures() {
  const { data, isPending } = useToures();
  console.log(data);

  return (
    <div className={styles.container}>
      {isPending ? (
        <p>Loading</p>
      ) : (
        data.map((tour) => (
          <div className={styles.tour} key={tour.id}>
            <div className={styles.tourBody}>
              <Image
                src={tour.image}
                width={1000}
                height={700}
                alt={tour.title}
              />
            </div>
            <div className={styles.tourFooter}></div>
          </div>
        ))
      )}
    </div>
  );
}

export default AllToures;
