"use client";
import SearchIcon from "@/public/icons/SearchIcon";
import styles from "./SearchTour.module.css";
import LocationIcon from "@/public/icons/LocationIcon";
import ComboInput from "@/ui/ComboInput";
import { useEffect, useRef, useState } from "react";
import { Calendar, CalendarProvider} from "zaman";
import CalenderIcon from "@/public/icons/CalenderIcon";
import { normalizeDate } from "@/utils/normalizeDate";

const formatDate = (date) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

function SearchTour({ data, search, setSearch, onSearch }) {
  const [showDate, setShowDate] = useState(false);
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
          label="Origin"
          data={data}
          value={search.origin}
          onChange={(val) => setSearch((prev) => ({ ...prev, origin: val }))}
        />
      </div>
      <div className={styles.comboContainer}>
        <SearchIcon />
        <ComboInput
          label="Destination"
          data={data}
          value={search.destination}
          onChange={(val) =>
            setSearch((prev) => ({ ...prev, destination: val }))
          }
        />
      </div>
      <div className={styles.showDateBtn} ref={wrapperRef}>
        <button onClick={() => setShowDate((is) => !is)}>
          <CalenderIcon />

          <span>
            {search.value.from && search.value.to
              ? ` ${formatDate(search.value.from)} - ${formatDate(search.value.to)}`
              : "Date"}
          </span>
        </button>
        {showDate ? (
          <div
            className={`${styles.calenderWrapper} ${
              showDate ? styles.open : ""
            }`}
          >
            <CalendarProvider locale="en" round="x4" accentColor="#6374ae">
              <Calendar
                defaultValue={new Date()}
                onChange={(range) => {
                  const from = normalizeDate(range?.from);
                  const to = normalizeDate(range?.to);
                  setSearch((prev) => ({
                    ...prev,
                    value: { from, to },
                  }));
                  if (from && to) {
                    setShowDate(false);
                  }
                }}
                weekends={[6]}
                from={new Date()}
                to={new Date()}
                range
              />
            </CalendarProvider>
          </div>
        ) : null}
      </div>
      <button className={styles.searchBtn} onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchTour;
