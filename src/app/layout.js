import { yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";
import { Toaster } from "react-hot-toast";
import QueryClientPro from "@/providers/QueryClientProvider";
import { AuthProvider } from "@/providers/AuthContext";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:"%s | Torino",
    default:"Torino"
  },
  description: "Torino ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="ltr">
      <body className={inter.className}>
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
