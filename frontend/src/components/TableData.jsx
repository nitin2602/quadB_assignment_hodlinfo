import React, { useEffect, useState } from "react";
import axios from "axios";

// TickerTable Component to display data with responsiveness and dark mode support
const TickerTable = ({ countdown, isDarkMode }) => {
  // State to store the fetched ticker data
  const [tickersData, setTickersData] = useState([]);
  console.log(isDarkMode);

  // Fetch ticker data when the component mounts
  useEffect(() => {
    const fetchTickersData = async () => {
      try {
        const response = await axios.get("https://quad-b-assignment-hodlinfo.vercel.app/api/tickers");
        setTickersData(response.data); // Store the fetched data in the state
      } catch (error) {
        console.error("Error fetching tickers data:", error);
      }
    };

    fetchTickersData();
  }, []);

  // Fetch new data when the countdown reaches zero
  useEffect(() => {
    const fetchTickersData = async () => {
      try {
        const response = await axios.get("https://quad-b-assignment-hodlinfo.vercel.app/api/tickers");
        setTickersData(response.data);
      } catch (error) {
        console.error("Error fetching tickers data:", error);
      }
    };

    if (countdown === 0) fetchTickersData();
  }, [countdown]);

  // Format number with commas
  const formatNumber = (num) => {
    if (typeof num === 'number') {
      return num.toLocaleString();
    }
    return num; // In case it's not a number
  };

  return (
    <div className="overflow-x-auto w-full">
      {tickersData.length > 0 ? (
        <table
          className={`w-full table-auto ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          } rounded-lg mb-8`}
        >
          {/* Table Header */}
          <thead className={`${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}>
            <tr>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
                #
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
                Name
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-right text-xs sm:text-sm md:text-base">
                Last Price
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-right text-xs sm:text-sm md:text-base">
                Buy / Sell
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-right text-xs sm:text-sm md:text-base">
                Volume
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-center text-xs sm:text-sm md:text-right">
                Base Unit
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tickersData.map((ticker, index) => (
              <tr
                key={ticker._id}
                className={`${
                  isDarkMode
                    ? "border-t border-gray-700"
                    : "border-t border-gray-300"
                }`}
              >
                {/* Table Row: Index */}
                <td className="px-4 py-4 sm:px-6 sm:py-7 text-xs sm:text-sm md:text-base font-mono whitespace-nowrap">
                  {index + 1}
                </td>

                {/* Table Row: Ticker Name */}
                <td className="px-4 py-2 font-semibold sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base flex items-center whitespace-nowrap">
                  {ticker.name}
                </td>

                {/* Table Row: Last Price */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono whitespace-nowrap text-right">
                  ₹ {formatNumber(ticker.last)}
                </td>

                {/* Table Row: Buy / Sell Prices */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono whitespace-nowrap text-right">
                  ₹ {formatNumber(ticker.buy)} / ₹ {formatNumber(ticker.sell)}
                </td>

                {/* Table Row: Volume */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base text-red-500 font-mono whitespace-nowrap text-right">
                  {formatNumber(ticker.volume)}
                </td>

                {/* Table Row: Base Unit */}
                <td className="px-4 py-2 sm:px-6 sm:py-4 font-bold text-xs sm:text-sm md:text-base text-red-500 font-mono whitespace-nowrap text-right">
                  {ticker.baseUnit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Loading spinner while fetching data
        <div className="flex justify-center items-center py-6">
          <img
            className="w-10 h-10 animate-spin ease-linear"
            src="/loading.svg"
            alt="Loading"
          />
        </div>
      )}
    </div>
  );
};

export default TickerTable;
