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
    <table className="w-full bg-gray-800 rounded-lg overflow-hidden mb-8">
      <thead className="bg-gray-700">
        <tr>
          <th className="px-6 py-4 text-left text-lg">#</th>
          <th className="px-6 py-4 text-left text-lg">Platform</th>
          <th className="px-6 py-4 text-left text-lg">Last Traded Price</th>
          <th className="px-6 py-4 text-left text-lg">Buy / Sell Price</th>
          <th className="px-6 py-4 text-left text-lg">Difference</th>
          <th className="px-6 py-4 text-left text-lg">Savings</th>
        </tr>
      </thead>
      <tbody>
        {tickers.map((ticker, index) => (
          <tr key={ticker._id} className="border-t border-gray-700">
            <td className="px-6 py-4 text-lg">{index + 1}</td>
            <td className="px-6 py-4 text-lg flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full mr-3"></div>
              {ticker.name}
            </td>
            <td className="px-6 py-4 text-lg">₹ {ticker.last}</td>
            <td className="px-6 py-4 text-lg">
              ₹ {ticker.buy} / ₹ {ticker.sell}
            </td>
            <td className="px-6 py-4 text-lg text-red-500">-3.14 %</td>
            <td className="px-6 py-4 text-lg text-red-500">▼ ₹ 83,498</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
