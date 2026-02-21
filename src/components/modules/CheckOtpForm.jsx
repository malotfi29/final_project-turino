"use client";

import { useMutation } from "@tanstack/react-query";
import styles from "./LoginModal.module.css";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "@/services/authService";
import toast from "react-hot-toast";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import Cookies from "js-cookie";
import Loading from "@/ui/Loading";


const RESEND_TIME = 90;

function CheckOtpForm({ resendOtp, mobile, setOpenLogin }) {
  const [code, setCode] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await mutateAsync({ mobile, code });
      Cookies.set("accessToken", data.accessToken, { expires: 1 });
      Cookies.set("refreshToken", data.refreshToken, { expires: 7 });
      localStorage.setItem("user", JSON.stringify(data.user));
      setOpenLogin(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const onResendHandler = () => {
    resendOtp({ mobile: mobile });
    setTime(RESEND_TIME);
  };

  return (
    <form onSubmit={checkOtpHandler}>
      <p>کد تایید به شماره {toPersianNumbers(mobile)} ارسال شد</p>
      <OTPInput
        value={code}
        onChange={setCode}
        numInputs={6}
        renderInput={(props) => <input type="number" {...props} />}
        containerStyle={styles.containerStyle}
        inputStyle={{
          width: "50px",
          height: "45px",
          border: "1px solid rgba(0, 0, 0, 0.25)",
          borderRadius: "6px",
        }}
      />
      <div>
        {time > 0 ? (
          <p> {time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <p onClick={onResendHandler}>ارسال مجدد کد تایید</p>
        )}
      </div>

      {isPending ? <Loading /> : <button type="submit">ورود به تورینو</button>}
    </form>
  );
}

export default CheckOtpForm;
