import styles from "./RegistrationPage.module.css";
import ProfileIcon from "@/public/icons/ProfileIcon";
import TextInput from "@/ui/TextInput";
import { getDuration } from "@/utils/getDuration";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersionNumber";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "react-multi-date-picker";
import { CalendarProvider } from "zaman";

function RegistrationPage({ user, basket }) {
   const [showDate, setShowDate] = useState(false);
  const duration = getDuration(basket?.startDate, basket?.endDate) || 0;
  // console.log(basket);
  // console.log(user);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({defaultValues:user});

  const onSubmit=(data)=>{
    console.log(data);
    
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.pasenger}>
        <h3>
          <ProfileIcon color="#000" width="20px" height="20px" />
          <span>مشخصات مسافر</span>
        </h3>
        <div>
          <TextInput
            placeholder="نام و نام خانوادگی"
            register={register}
            errors={errors}
            name="mobile"
            
          />
          <TextInput
            placeholder="کدملی"
            register={register}
            errors={errors}
            name="name"
          />
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
          <TextInput
            placeholder="جنسیت"
            register={register}
            errors={errors}
            name="name"
          />
        </div>
      </div>
      <div className={styles.basket}>
        <div className={styles.basketTitle}>
          <h2>{basket?.title}</h2>
          <p>
            {toPersianNumbers(duration)}روز و {toPersianNumbers(duration - 1)}{" "}
            شب
          </p>
        </div>
        <div className={styles.basketPrice}>
          <p>قیمت نهایی :</p>
          <span>{toPersianNumbersWithComma(basket?.price)} تومان</span>
        </div>
        <button>ثبت و خرید نهایی</button>
      </div>
    </form>
  );
}

export default RegistrationPage;
