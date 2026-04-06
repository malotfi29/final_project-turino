import * as yup from "yup";

export const sentOtpSchema = yup.object({
  mobile: yup.string().matches(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
  email:yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"ایمیل معتبر نیست")
});


