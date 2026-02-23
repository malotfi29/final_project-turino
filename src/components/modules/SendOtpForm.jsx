"use client";


import TextInput from "@/ui/TextInput";
import { toPersianNumbers } from "@/utils/toPersionNumber";


function SendOtpForm({ register, onSubmit, isSendingOtp, errors }) {
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
<button type="submit">ارسال کد تایید</button>
      {/* {isSendingOtp ? (
        <Loading />
      ) : (
        <button type="submit">ارسال کد تایید</button>
      )} */}
    </form>
  );
}

export default SendOtpForm;
