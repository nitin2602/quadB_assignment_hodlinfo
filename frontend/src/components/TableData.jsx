import React, { useEffect, useState } from "react";
import axios from "axios";

const TableData = ({ countdown, darkMode }) => {
  const [tickers, setTickers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://hodlinfo-clone-self.vercel.app/api/v1/tickers/get-tickers"
      );
      setTickers(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://hodlinfo-clone-self.vercel.app/api/v1/tickers/get-tickers"
      );
      setTickers(result.data);
    };

    if (countdown === 0) fetchData();
  }, [countdown]);

  return (
    <div className="overflow-x-auto">
      {tickers.length > 0 ? (
        <table
          className={`w-full table-auto ${
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
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-right text-xs sm:text-sm md:text-base">
                Last
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-right text-xs sm:text-sm md:text-base">
                Buy / Sell
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-right text-xs sm:text-sm md:text-base">
                Volume
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-center text-xs sm:text-sm md:text-base">
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
                <td className="px-4 py-2 sm:px-6 sm:py-6 text-xs sm:text-sm md:text-base">
                  <div className="flex items-center h-full">{ticker.name}</div>
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono text-right">
                  ₹ {ticker.last}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono text-right">
                  ₹ {ticker.buy} / ₹ {ticker.sell}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base text-red-500 font-mono text-right">
                  {ticker.volume}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base text-red-500 font-mono text-center">
                  {ticker.base_unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <img
          className="w-full h-10 animate-spin ease-linear"
          src="/loading.svg"
          alt="Loading icon"
        ></img>
      )}
    </div>
  );
};

export default TableData;
