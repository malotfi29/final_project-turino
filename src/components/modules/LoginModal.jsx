"use client";
import CloseIcon from "@/public/icons/CloseIcon";
import styles from "./LoginModal.module.css";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { sentOtpSchema } from "@/utils/validationSchema";
import ArrowLeft from "@/public/icons/ArrowLeft";
import app from "@/services/httpService";

function LoginModal({ openLogin, setOpenLogin }) {
  const [step, setStep] = useState(1);
  const[isSendingOtp,setIsSendingOtp]=useState(false)

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(sentOtpSchema) });

  const sendOtpHandler = async (mobile) => {
    try {
      setIsSendingOtp(true)
      const res = await app.post(`/api/auth/send-otp`, mobile);

      setStep(2);
      toast.success(`کد اعتبار سنجی شما ${res.data.code}`,{style:{fontSize:"14px"}});
    } catch (error) {
      toast.error(error);
      console.log(error);
    }finally{
      setIsSendingOtp(false)
    }
  };

  if (!openLogin) return null;

  return (
    <div className={styles.container}>
     
      <div
        className={styles.backdrop}
        onClick={() => setOpenLogin(false)}
      ></div>
      <div className={styles.modal}>
        <div className={styles.modal__header}>
          {step === 1 ? (
            <button onClick={() => setOpenLogin(false)}>
              <CloseIcon />
            </button>
          ) : (
            <button onClick={() => setStep((s) => s - 1)}>
              <ArrowLeft />
            </button>
          )}

          <h2 className={styles.title}>
            {step === 1 ? "ورود به تورینو" : "کد تایید را وارد کنید"}
          </h2>
        </div>
        {step === 1 ? (
          <SendOtpForm
            register={register}
            onSubmit={handleSubmit(sendOtpHandler)}
            errors={errors}
            isSendingOtp={isSendingOtp}
          />
        ) : (
          <CheckOtpForm
            mobile={getValues("mobile")}
            resendOtp={sendOtpHandler}
            setOpenLogin={setOpenLogin}
          />
        )}
      </div>
      <Toaster/>
    </div>
  );
}

export default LoginModal;
