"use client";

import Loading from "@/ui/Loading";
import TextInput from "@/ui/TextInput";


function SendOtpForm({ register, onSubmit, isSendingOtp, errors }) {
  return (
    <form onSubmit={onSubmit}>
      <TextInput
        label="شماره موبایل خود را وارد کنید"
        register={register}
        errors={errors}
        name="mobile"
        required
      />

      {isSendingOtp ? (
        <Loading />
      ) : (
        <button type="submit">ارسال کد تایید</button>
      )}
    </form>
  );
}

export default SendOtpForm;
