import React, { useEffect, useState } from "react";
import axios from "axios";
import { Toggle } from "@carbon/react";
import "@carbon/styles/css/styles.css";

const Header = ({ countdown, darkMode, handleToggle }) => {
  const options = [
    "BTC",
    "ETH",
    "USDT",
    "XRP",
    "TRX",
    "DASH",
    "ZEC",
    "XEM",
    "IOST",
    "WIN",
    "BTT",
    "WRX",
  ];
  useEffect(() => {
    if (countdown === 5) {
      const fetchFromWazirApi = async () => {
        try {
          await axios.get("https://quad-b-assignment-hodlinfo.vercel.app/fetch-tickers");
        } catch (error) {
          console.error("Error ", error);
        }
      };

      fetchFromWazirApi();
    }
  }, [countdown]);

  useEffect(() => {
    const fetchFromWazirApi = async () => {
      try {
        await axios.get("https://quad-b-assignment-hodlinfo.vercel.app/fetch-tickers");
      } catch (error) {
        console.error("Error ", error);
      }
    };
    fetchFromWazirApi();
  }, []);
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl  font-oswald font-normal text-teal-400">
        HODLINFO
      </h1>
      <div className="flex text-wrap justify-center  items-center space-x-2 sm:space-x-4 ml-8">
        <select
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          } px-2 py-1 sm:px-3 sm:py-1 rounded-md  text-sm sm:text-base mb-1 sm:mb-0`}
        >
          <option>INR</option>
        </select>
        <select
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          } px-2  py-1 cursor-pointer sm:px-3 sm:py-1 rounded-md  text-sm sm:text-base mb-2 sm:mb-0`}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          } px-2 py-1  sm:px-3 sm:py-1 rounded-md text-nowrap  text-sm sm:text-base mb-2 sm:mb-0`}
        >
          BUY BTC
        </button>
      </div>
      <div className="  flex flex-col gap-5 justify-center sm:flex-row items-center space-x-2 sm:space-x-4 ">
        <div className="flex gap-4">
          <div className="w-10 h-10 sm:w-10 sm:h-10 bg-transparent text-teal-400 border-solid border-[3px] border-white rounded-full flex items-center justify-center text-xs sm:text-lg font-bold">
            {countdown}
          </div>

          <button className="bg-teal-400 text-white px-2 py-2 sm:px-4 sm:py-1 rounded-lg font-bold flex items-center text-sm sm:text-base">
            <i class="text-lg ri-telegram-2-fill mr-3"></i>
            Connect Telegram
          </button>
        </div>

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
