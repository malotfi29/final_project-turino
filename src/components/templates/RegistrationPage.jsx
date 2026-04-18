import PersonalInformation from "@/modules/PersonalInformation";
import styles from "./RegistrationPage.module.css";
import { getDuration } from "@/utils/getDuration";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersionNumber";
import toast from "react-hot-toast";
import app from "@/services/httpService";

function RegistrationPage({ user, basket }) {
  const duration = getDuration(basket?.startDate, basket?.endDate) || 0;
  const dataToSend = {
    nationalCode: user?.nationalCode,
    fullName: user?.firstName + " " + user?.lastName,
    gender: user?.gender,
    birthDate: user?.birthDate,
  };


   


  const handleSubmit = async () => {
    if (
      !user.firstName ||
      !user.lastName ||
      !user.gender ||
      !user.birthDate ||
      !user.nationalCode
    ) {
      toast.error("لطفا اطلاعات خود را تکمیل کنید");
      return;
    }
    try {
      const res = await app.post("/api/user/order", dataToSend);
      toast.success(res.data.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  if(!user) return null
  return (
    <div className={styles.container}>
      <PersonalInformation />
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
        <button onClick={handleSubmit}>ثبت و خرید نهایی</button>
      </div>
    </div>
  );
}

export default RegistrationPage;
