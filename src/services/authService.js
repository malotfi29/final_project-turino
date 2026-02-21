import app from "./httpService";

export function getOtp(mobile) {
  return app.post("/auth/send-otp", mobile).then((data) => data);
}

export function checkOtp(data) {
  return app.post("/auth/check-otp", data).then((data) => data);
}