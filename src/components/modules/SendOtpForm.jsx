"use client";

import Skeleton from "@/ui/Skeleton";

import TextInput from "@/ui/TextInput";
import { toPersianNumbers } from "@/utils/toPersionNumber";

function SendOtpForm({ register, onSubmit, errors, isSendingOtp }) {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="شماره موبایل خود را وارد کنید"
        register={register}
        errors={errors}
        name="mobile"
        required
        placeholder={toPersianNumbers("09123456789")}
      />
      <button
        type="submit"
        disabled={isSendingOtp}
        style={{
          background: "rgba(40,167,69,1)",
          color: "white",
          height: "44px",
          borderRadius: "8px",
          border: "none",
          width: "100%",
        }}
      >
        {isSendingOtp ? <Skeleton /> : "ارسال کد تایید"}
      </button>
    </form>
  );
}

export default SendOtpForm;
