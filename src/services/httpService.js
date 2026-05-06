import axios from "axios";

const app = axios.create({
  baseURL: "",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

app.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 ||
      (error.response?.status === 403 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;

      try {
        const refreshResponse = await axios.post(
          "/api/auth/refreshToken"
          // {},
          // { withCredentials: true }
        );

        if (refreshResponse.status === 200) {
          return app(originalRequest);
        }
      } catch (refreshError) {
        return Promise.reject({
          message: "لطفا وارد حساب کاربری خود شوید",
          status: 401,
        });
      }
    }

    return Promise.reject({
      status: error.response?.status,
      message:
        error.response?.data?.message || error.message || "خطایی رخ داده است",
    });
  }
);

export default app;
