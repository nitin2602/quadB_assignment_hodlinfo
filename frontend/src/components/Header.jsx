import React, { useEffect, useState } from "react";

const Header = () => {
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
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-5xl font-bold text-teal-400">HODLINFO</h1>
      <div className="flex items-center space-x-4">
        <select className="bg-gray-800 text-white px-4 py-2 rounded">
          <option>INR</option>
        </select>
        <select className="bg-gray-800 text-white px-4 py-2 rounded">
          <option>BTC</option>
        </select>
        <button className="bg-gray-800 text-white px-4 py-2 rounded">
          BUY BTC
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center text-xl font-bold">
          {countdown}
        </div>
        <button className="bg-teal-400 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2">
          <i class="text-lg ri-telegram-2-fill"></i>
          Connect Telegram
        </button>
      </div>
    </header>
  );
};

export default Header;
