/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  image: {
    protocol: "http",
    hostname: "localhost",
    port: "6500",
    pathname: "/static/images/**",
    search: "",
  },
};

export default nextConfig;
