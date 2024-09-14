import React, { useEffect, useState } from "react";
import axios from "axios";

const TableData = ({ countdown, darkMode }) => {
  const [tickers, setTickers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:3000/api/v1/tickers/get-tickers"
      );
      setTickers(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:3000/api/v1/tickers/get-tickers"
      );
      setTickers(result.data);
    };

    if (countdown === 0) fetchData();
  }, [countdown]);
  return (
    <div className="overflow-x-auto">
      <table
        className={`w-full ${
          darkMode ? "bg-gray-800" : "bg-gray-200"
        } rounded-lg overflow-hidden mb-8`}
      >
        <thead className={`${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
          <tr>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              #
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Name
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Last
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Buy / Sell
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Volume
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Base Unit
            </th>
          </tr>
        </thead>
        <tbody>
          {tickers.map((ticker, index) => (
            <tr
              key={ticker._id}
              className={`${
                darkMode
                  ? "border-t border-gray-700"
                  : "border-t border-gray-300"
              }`}
            >
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono">
                {index + 1}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base flex items-center">
                <div
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${
                    darkMode ? "bg-blue-500" : "bg-blue-300"
                  } rounded-full mr-2 sm:mr-3`}
                ></div>
                {ticker.name}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono">
                ₹ {ticker.last}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono">
                ₹ {ticker.buy} / ₹ {ticker.sell}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base text-red-500 font-mono">
                {ticker.volume}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base text-red-500 font-mono">
                {ticker.base_unit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
