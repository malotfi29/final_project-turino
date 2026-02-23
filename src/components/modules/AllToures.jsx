"use client";
import { useToures } from "@/utils/useQueries";
import styles from "./AllToures.module.css";
import Tour from "./Tour";

function AllToures() {
  const { data, isPending } = useToures();
  console.log(data);

  return (
    <div className={styles.container}>
      {isPending ? (
        <p>Loading</p>
      ) : (
        data.map((tour) => <Tour tour={tour} key={tour.id} />)
      )}
    </div>
  );
}

export default AllToures;
