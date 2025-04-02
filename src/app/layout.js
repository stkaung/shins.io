import ThmeModeSwither from "@/components/shared/others/ThmeModeSwither";
import { Suspense } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/animate.min.css";
import "./css/backToTop.css";
import "./css/flaticon_gerold.css";
import "./css/font-awesome-pro.min.css";
import "./css/glightbox.min.css";
import "./css/nice-select2.css";
import "./css/odometer-theme-default.css";
import "./globals.css";

export const metadata = {
  title: "Shin Development",
  description: "Shin Development - The Ultimate Business Accelerator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark ">
      <body
        className={`font-sora  dark:bg-dark-color overflow-x-hidden  relative`}
      >
        <Suspense fallback={<></>}>{children}</Suspense>
        <ThmeModeSwither />
      </body>
    </html>
  );
}
