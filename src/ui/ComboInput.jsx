"use client";

import { useState } from "react";
import styles from "./ComboInput.module.css";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";

const staredCities = [
  { id: 1, name: "tehran", value: "تهران" },
  { id: 2, name: "sanandaj", value: "سنندج" },
  { id: 10, name: "tabriz", value: "تبریز" },
  { id: 11, name: "shiraz", value: "شیراز" },
];

function ComboInput({ data, label, value, onChange }) {
  
  
  const [query, setQuery] = useState("");
  const destinations = data?.map((t) => t.destination) || [];
  const origins = data?.map((t) => t.origin) || [];
  const cities = [
    ...new Map(
      [...destinations, ...origins].map((item) => [item.id, item])
    ).values(),
  ];

  const filteredCities =
    query === ""
      ? staredCities
      : cities.filter((city) => city.value.trim().includes(query.trim()));

  return (
    <div className={styles.container}>
      <Combobox value={value} onChange={onChange}>
        <ComboboxInput
          className={styles.comboInput}
          displayValue={(city) => city?.value}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={label}
          onFocus={()=>setQuery("")}
        />

        <ComboboxOptions className={styles.comboOptions}>
          <p>پرتردد</p>
          {filteredCities.length === 0 ? (
            <div className={styles.notFound}>نتیجه‌ای یافت نشد</div>
          ) : (
            filteredCities.map((city) => (
              <ComboboxOption
                key={city.id}
                value={city}
                className={styles.comboOption}
              >
                {city.value}
              </ComboboxOption>
            ))
          )}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}

export default ComboInput;
