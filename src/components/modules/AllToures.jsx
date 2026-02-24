
import styles from "./AllToures.module.css";
import Tour from "./Tour";

async function AllToures({ data }) {
  return (
    <div className={styles.container}>
      {data
        ? data.map((tour) => <Tour tour={tour} key={tour.id} />)
        : "loading"}
    </div>
  );
}

export default AllToures;
