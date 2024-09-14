import React, { useEffect, useState } from "react";
import axios from "axios";

const TableData = () => {
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
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-gray-800 rounded-lg overflow-hidden mb-8">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              #
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Platform
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Last Traded Price
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Buy / Sell Price
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Difference
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm md:text-base">
              Savings
            </th>
          </tr>
        </thead>
        <tbody>
          {tickers.map((ticker, index) => (
            <tr key={ticker._id} className="border-t border-gray-700">
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono">
                {index + 1}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                {ticker.name}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono">
                ₹ {ticker.last}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-mono">
                ₹ {ticker.buy} / ₹ {ticker.sell}
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base text-red-500 font-mono">
                -3.14 %
              </td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base text-red-500 font-mono">
                ▼ ₹ 83,498
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
