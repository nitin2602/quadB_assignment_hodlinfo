import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BestPrice from "./components/BestPrice";
import TableData from "./components/TableData";

export default function Component() {
  const [countdown, setCountdown] = useState(60);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 60
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 font-sans">
      <Header countdown={countdown} />
      <BestPrice />
      <TableData countdown={countdown} />
      <Footer />
    </div>
  );
}
