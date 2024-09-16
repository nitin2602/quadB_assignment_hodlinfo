//Assignment completed by Nitin Tripathi
//Assignment completed by Nitin Tripathi
//Assignment completed by Nitin Tripathi
//Assignment completed by Nitin Tripathi

import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BestPrice from "./components/BestPrice";
import TableData from "./components/TableData";
import { Analytics } from "@vercel/analytics/react";

export default function Component() {
  const [countdown, setCountdown] = useState(60);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 60
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleToggle = (toggled) => {
    setDarkMode(toggled);
  };
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } min-h-screen p-4 sm:p-6 md:p-8 font-oswald`}
    >
      <Header
        countdown={countdown}
        darkMode={darkMode}
        handleToggle={handleToggle}
      />
      <BestPrice />
      <TableData countdown={countdown} isDarkMode={darkMode} />
      <Footer />
      <Analytics />
    </div>
  );
}

//Assignement completed by Nitin Tripathi