"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AllToures.module.css";
import SearchTour from "./SearchTour";
import Tour from "./Tour";
import toast from "react-hot-toast";
import app from "@/services/httpService";
import { toUTCStartOfDay } from "@/utils/toUTCStartOfDay";
import ArrowDown from "@/public/icons/ArrowDown";
import SkeletonDots from "@/ui/Skeleton";

function AllToures() {
  const toursRef = useRef(null);
  const [data, setData] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [moreTours, setMoreTours] = useState(false);
  const [search, setSearch] = useState({
    origin: "",
    destination: "",
    value: {},
  });

  const fetchTours = useCallback(async () => {
    try {
      const params = new URLSearchParams();

      if (search.origin?.id) {
        params.append("originId", search.origin.id);
      }

      if (search.destination?.id) {
        params.append("destinationId", search.destination.id);
      }

      if (search.value?.from) {
        params.append(
          "startDate",
          toUTCStartOfDay(search.value.from).toISOString()
        );
      }

      if (search.value?.to) {
        params.append(
          "endDate",
          toUTCStartOfDay(search.value.to).toISOString()
        );
      }

      const res = await app.get(`/api/tour/get?${params.toString()}`);
      if (
        !search.origin?.id &&
        !search.destination?.id &&
        !search.value?.from &&
        !search.value?.to
      ) {
        setCityOptions(res.data);
      }
      const tours = moreTours ? res.data : res.data.slice(0, 4);
      setData(tours);
    } catch (error) {
      toast.error("Failed to Load Tours");
    }
  }, [moreTours, search]);

  useEffect(() => {
    fetchTours();
  }, [moreTours]);

  return (
    <div className={styles.container} id="tours">
      <div className={styles.search}>
        <SearchTour
          data={cityOptions}
          search={search}
          setSearch={setSearch}
          onSearch={() => fetchTours(search)}
        />
      </div>
      <section className={styles.toursSection} aria-labelledby="all-tours-title">
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionEyebrow}>FIND YOUR NEXT EXPERIENCE</p>
            <h2 className={styles.title} id="all-tours-title">All Tours</h2>
          </div>
        </div>
        <div
          className={`${styles.TouresContainer} ${moreTours ? styles.expandedTours : ""}`}
          ref={toursRef}
        >
          {!!data.length ? (
            data.map((tour) => <Tour tour={tour} key={tour.id} />)
          ) : (
            <p className={styles.notour}>
              No tours found matching your selected criteria. Please adjust your
              filters and try again.
            </p>
          )}
        </div>
        {!!data.length ? (
          <button className={styles.seeMore} type="button" onClick={() => setMoreTours((is) => !is)}>
            {moreTours ? "Show Less" : "Show More"}
            <span className={moreTours ? styles.arrow : ""}><ArrowDown /></span>
          </button>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}

export default AllToures;
