import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toggle } from "@carbon/react";
import "@carbon/styles/css/styles.css";

const Header = ({ countdown, darkMode, handleToggle }) => {
  useEffect(() => {
    if (countdown === 1) {
      const fetchFromWazirApi = async () => {
        try {
          await axios.get(
            "https://hodlinfo-clone-backend.vercel.app/api/v1/tickers/fetch"
          );
        } catch (error) {
          console.error("Error ", error);
        }
      };

      fetchFromWazirApi();
    }
  }, [countdown]);
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-400">
        HODLINFO
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-2 sm:space-x-4 ml-8">
        <select
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          } px-2 py-1 sm:px-4 sm:py-2 rounded font-mono text-sm sm:text-base mb-2 sm:mb-0`}
        >
          <option>INR</option>
        </select>
        <select
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          } px-2 py-1 sm:px-4 sm:py-2 rounded font-mono text-sm sm:text-base mb-2 sm:mb-0`}
        >
          <option>BTC</option>
        </select>
        <button
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          } px-2 py-1 sm:px-4 sm:py-2 rounded font-mono text-sm sm:text-base mb-2 sm:mb-0`}
        >
          BUY BTC
        </button>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-400 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold font-mono">
          {countdown}
        </div>
        <button className="bg-teal-400 text-gray-900 px-3 py-2 sm:px-4 sm:py-1 rounded-lg font-bold flex items-center text-sm sm:text-base">
          <i class="text-lg ri-telegram-2-fill mr-3"></i>
          Connect Telegram
        </button>

        <Toggle
          id="dark-mode-toggle"
          defaultToggled={darkMode}
          onToggle={handleToggle}
        />
      </div>
    </header>
  );
};

export default Header;
