"use client";

import { useEffect, useState } from "react";
import styles from "./AllToures.module.css";
import SearchTour from "./SearchTour";
import Tour from "./Tour";
import toast from "react-hot-toast";
import app from "@/services/httpService";

function AllToures() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    origin: "",
    destination: "",
    value: { from: null, to: null },
  });

  const fetchTours = async () => {
    try {
      const params = new URLSearchParams();

      if (search.origin?.id) {
        params.append("originId", search.origin.id);
      }

      if (search.destination?.id) {
        params.append("destinationId", search.destination.id);
      }

      if (search.value?.from) {
        params.append("startDate", search.value.from.toISOString());
      }

      if (search.value?.to) {
        params.append("endDate", search.value.totoISOString());
      }

      const res = await app.get(`/api/tour/get?${params.toString()}`);

      setData(res.data);
    } catch (error) {
      toast.error("خطا در دریافت تورها");
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <h2>
          <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
        </h2>
        <SearchTour
          data={data}
          search={search}
          setSearch={setSearch}
          onSearch={() => fetchTours(search)}
        />
      </div>
      <h2 className={styles.title}>همه ی تورها</h2>
      <div className={styles.TouresContainer}>
        {data
          ? data.map((tour) => <Tour tour={tour} key={tour.id} />)
          : "loading"}
      </div>
    </div>
  );
}

export default AllToures;
