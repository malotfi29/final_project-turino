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
    const status = error.response?.status;

    if (
      originalRequest &&
      (status === 401 || status === 403) &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await axios.post("/api/auth/refreshToken", {}, { withCredentials: true });
        return app(originalRequest);
      } catch (refreshError) {
        return Promise.reject({
          status: refreshError.response?.status || 401,
          message:
            refreshError.response?.data?.message ||
            "Please log in to your account.",
        });
      }
    }

    return Promise.reject({
      status,
      message:
        error.response?.data?.message || error.message || "Request failed.",
    });
  }
);

export default app;
