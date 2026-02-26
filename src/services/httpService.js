

import axios from "axios";

const app = axios.create({
  baseURL: "",
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
