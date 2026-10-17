import PersonalInformation from "@/modules/PersonalInformation";
import styles from "./RegistrationPage.module.css";
import { getDuration } from "@/utils/getDuration";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersionNumber";
import toast from "react-hot-toast";
import app from "@/services/httpService";
import { useRouter } from "next/navigation";

function RegistrationPage({ user, basket }) {
  const router = useRouter();
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
      toast.error("Please complete your profile information.", {
        styles: { fontSize: "16px" },
      });
      return;
    }
    try {
      const res = await app.post("/api/user/order", dataToSend);
      toast.success(res.data.data.message, { style: { fontSize: "16px" } });

      router.replace("/myTours");
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (!user) return null;
  return (
    <div className={styles.container}>
      <PersonalInformation />
      <div className={styles.basket}>
        <div className={styles.basketTitle}>
          <h2>{basket?.title}</h2>
          <p>
            {duration}days and {duration - 1}
            night
          </p>
        </div>
        <div className={styles.basketPrice}>
          <p>Total Price:</p>
          <span>{basket?.price}$</span>
        </div>
        <button onClick={handleSubmit}>Complete Booking</button>
      </div>
    </div>
  );
}

export default RegistrationPage;
