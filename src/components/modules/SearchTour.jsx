"use client";
import SearchIcon from "@/public/icons/SearchIcon";
import styles from "./SearchTour.module.css";
import LocationIcon from "@/public/icons/LocationIcon";
import ComboInput from "@/ui/ComboInput";
import { useEffect, useRef, useState } from "react";
import { Calendar, CalendarProvider, DatePicker } from "zaman";
import CalenderIcon from "@/public/icons/CalenderIcon";
import { normalizeDate } from "@/utils/normalizeDate";

const formatDate = (date) => {
  if (!date) return "";
  return date.toLocaleDateString("fa-IR");
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
          label="مبدا"
          data={data}
          value={search.origin}
          onChange={(val) => setSearch((prev) => ({ ...prev, origin: val }))}
        />
      </div>
      <div className={styles.comboContainer}>
        <SearchIcon />
        <ComboInput
          label="مقصد"
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
              : "تاریخ"}
          </span>
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
        جستجو
      </button>
    </div>
  );
}

export default SearchTour;
