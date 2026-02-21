import * as yup from "yup";

export const sentOtpSchema = yup.object({
  mobile: yup.string().matches(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
});


