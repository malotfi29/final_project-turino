"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./AllToures.module.css";
import SearchTour from "./SearchTour";
import Tour from "./Tour";
import toast from "react-hot-toast";
import app from "@/services/httpService";
import { toUTCStartOfDay } from "@/utils/toUTCStartOfDay";
import ArrowDown from "@/public/icons/ArrowDown";
import SkeletonDots from "@/ui/Skeleton";

function AllToures() {
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
    <div className={styles.container}>
      <div className={styles.search}>
        <h2>
          <span>Torino</span> Your Gateway to Unforgettable Travel Experiences
        </h2>
        <SearchTour
          data={cityOptions}
          search={search}
          setSearch={setSearch}
          onSearch={() => fetchTours(search)}
        />
      </div>
      <h2 className={styles.title}>All Tours</h2>
      <div className={styles.TouresContainer}>
        {!!data.length ? (
          data.map((tour) => <Tour tour={tour} key={tour.id} />)
        ) : (
          <SkeletonDots />
         
        )}
      </div>
      <p className={styles.seeMore} onClick={() => setMoreTours((is) => !is)}>
        {moreTours ? "close" : "View More"}
        <span className={moreTours ? styles.arrow : ""}>
          <ArrowDown />
        </span>
      </p>
    </div>
  );
}

export default AllToures;
