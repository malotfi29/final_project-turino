"use client";
import CloseIcon from "@/public/icons/CloseIcon";
import styles from "./LoginModal.module.css";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { sentOtpSchema } from "@/utils/validationSchema";
import ArrowLeft from "@/public/icons/ArrowLeft";
import axios from "axios";

function LoginModal({ openLogin, setOpenLogin }) {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(sentOtpSchema) });

  const sendOtpHandler = async (mobile) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/send-otp`,
        mobile
      );
      setStep(2);
      toast.success(`کد اعتبار سنجی شما ${res.data.code}`);
    } catch (error) {
      toast.error(error?.response?.data?.error);
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
          />
        ) : (
          <CheckOtpForm
            mobile={getValues("mobile")}
            resendOtp={sendOtpHandler}
            setOpenLogin={setOpenLogin}
          />
        )}
      </div>
    </div>
  );
}

export default LoginModal;
