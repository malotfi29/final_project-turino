"use client";
import SearchIcon from "@/public/icons/SearchIcon";
import styles from "./SearchTour.module.css";
import LocationIcon from "@/public/icons/LocationIcon";
import ComboInput from "@/ui/ComboInput";
import { useToures } from "@/utils/useQueries";
import { useEffect, useRef, useState } from "react";
import { Calendar, CalendarProvider } from "zaman";
import CalenderIcon from "@/public/icons/CalenderIcon";

function SearchTour() {
  const { data } = useToures();
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [value, setValue] = useState([null, null]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDate(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className={styles.container}>
      <div className={styles.comboContainer}>
        <LocationIcon />
        <ComboInput
          label="مبدا"
          data={data}
          value={origin}
          onChange={setOrigin}
        />
      </div>
      <div className={styles.comboContainer}>
        <SearchIcon />
        <ComboInput
          label="مقصد"
          data={data}
          value={destination}
          onChange={setDestination}
        />
      </div>
      <div className={styles.showDateBtn} ref={wrapperRef}>
        <button onClick={() => setShowDate((is) => !is)}>
          <CalenderIcon />
          <span>تاریخ</span>
        </button>
        {showDate ? (
          <div
            className={`${styles.calenderWrapper} ${
              showDate ? styles.open : ""
            }`}
          >
            <CalendarProvider locale="fa" round="x4" accentColor="#6374ae">
              <Calendar
                defaultValue={new Date()}
                onChange={(e) => setValue(e.from, e.to)}
                weekends={[6]}
                from={new Date()}
                to={new Date().setDate(new Date().getDate() + 3)}
                range
              />
            </CalendarProvider>
          </div>
        ) : null}
      </div>
      <button className={styles.searchBtn}>جستجو</button>
    </div>
  );
}

export default SearchTour;
