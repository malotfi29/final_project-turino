// import axios from "axios";
// import Cookies from "js-cookie";
// import toast from "react-hot-toast";

// // const BASE_URL = "http://localhost:6500";
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// const app = axios.create({
//   baseURL: BASE_URL,
//   headers: { "Content-Type": "application/json" },
// });

// app.interceptors.request.use(
//   (request) => {
//     const accessToken = Cookies.get("accessToken");
//     if (accessToken) {
//       request.headers["Authorization"] = `Bearer ${accessToken}`;
//     }
//     return request;
//   },
//   (error) => Promise.reject(error)
// );

// app.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const res = await getNewToken();
//       if (res?.response?.status === 201) {
//         Cookies.set("accessToken", res?.response?.data?.accessToken,{ expires: 7 });
//         Cookies.set("refreshToken", res?.response?.data?.refreshToken,{ expires: 30 });
//         return app(originalRequest);
//       } else {
//         Cookies.set("accessToken", "", { expires: 0 });
//         Cookies.set("refreshToken", "", { expires: 0 });
//       }
//     }
//     return Promise.reject(error.response.data);
//   }
// );

// export default app;

// const getNewToken = async () => {
//   const refreshToken = Cookies.get("refreshToken");
//   if (!refreshToken) return;
//   try {
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh-token`,
//       {
//         refreshToken,
//       }
//     );
//     return { response };
//   } catch (error) {
//     return error;
//   }
// };

import axios from "axios";
import toast from "react-hot-toast";

// const BASE_URL = "http://localhost:6500";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const app = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials:true,
});

app.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(
          "/api/auth/refresh",
          {},
          { withCredentials: true }
        );

        if (refreshResponse.status === 200) {
          return app(originalRequest);
        }
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default app;
