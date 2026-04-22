import { yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import { Toaster } from "react-hot-toast";
import QueryClientPro from "@/providers/QueryClientProvider";
import { AuthProvider } from "@/providers/AuthContext";

export const metadata = {
  title: {
    template:"%s | تورینو",
    default:"تورینو"
  },
  description: "تورینو ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <AuthProvider>
          <QueryClientPro>
            <Layout>{children}</Layout>
          </QueryClientPro>
        </AuthProvider>
            {/* <Toaster /> */}
      </body>
    </html>
  );
}
