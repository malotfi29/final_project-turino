"use client";

import styles from "./LoginModal.module.css";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import toast, { Toaster } from "react-hot-toast";
import { toPersianNumbers } from "@/utils/toPersionNumber";
import app from "@/services/httpService";
import { useRouter } from "next/navigation";
import Skeleton from "@/ui/Skeleton";

const RESEND_TIME = 90;

function CheckOtpForm({ resendOtp, mobile, setOpenLogin }) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [time, setTime] = useState(RESEND_TIME);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async () => {
    // e.preventDefault();
    try {
      const res = await app.post(`/api/auth/check-otp`, {
        mobile,
        code,
      });
      if (res.status === 200) window.location.reload();

      setOpenLogin(false);
    } catch (error) {
     toast.error("کد وارد شده صحیح نمی باشد")
      console.log(error);
    }
  };

  const onResendHandler = () => {
    resendOtp({ mobile: mobile });
    setTime(RESEND_TIME);
  };

  useEffect(()=>{
    if(code.length===6){
      checkOtpHandler()
    }
  },[code])

  return (
<div>

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
        shouldAutoFocus
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
     
    </div>
  );
}

export default CheckOtpForm;
