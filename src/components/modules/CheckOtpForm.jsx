"use client";

import { useMutation } from "@tanstack/react-query";
import styles from "./LoginModal.module.css";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "@/services/authService";
import toast from "react-hot-toast";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import axios from "axios";

const RESEND_TIME = 90;

function CheckOtpForm({ resendOtp, mobile, setOpenLogin }) {
  const [code, setCode] = useState("");
  const [time, setTime] = useState(RESEND_TIME);


  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/check-otp`, {
        mobile,
        code,
      });
      const data = res.data;
      await axios.post("/api/auth/setToken", {
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
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
      <button type="submit">ورود به تورینو</button>
      {/* {isPending ? <Loading /> : <button type="submit">ورود به تورینو</button>} */}
    </form>
  );
}

export default CheckOtpForm;
