import styles from "./MyToursPage.module.css";
import MyTour from "@/modules/MyTour";

function MytoursPage({ tours }) {
  return (
    <>
      {!tours.length ? (
        <p className={styles.noTours}>توری وجود ندارد</p>
      ) : (
        <div className={styles.container}>
          {tours.map((tour, index) => (
            <MyTour tour={tour} key={index} />
          ))}
        </div>
      )}
    </>
  );
}

export default MytoursPage;
