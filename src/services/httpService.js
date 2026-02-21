import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

// const BASE_URL = "http://localhost:6500";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const app = axios.create({
  baseURL: BASE_URL,
});

app.interceptors.request.use(
  (req) => {
    const token = Cookies.get("accessToken");
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest=err.config
    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry=true
      const refreshToken = Cookies.get("refreshToken");
      const res = await axios.post("/auth/refresh-token", { refreshToken });
      Cookies.set("accessToken", res?.data?.accessToken);
      originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
      return axios(err.config);
    }
    return Promise.reject(err);
  }
);

export default app;
