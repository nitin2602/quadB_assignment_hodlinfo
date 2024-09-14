import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Component() {
  const [tickers, setTickers] = useState([]);
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {}, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://localhost:3000/api/v1/tickers/get-tickers"
      );
      setTickers(result.data);
    };

    fetchData();

    const timer = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 60
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-9">
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

      <div className="flex justify-between items-center mb-12">
        <div className="text-teal-400 text-center">
          <div className="text-4xl font-bold">0.1 %</div>
          <div className="text-lg">5 Mins</div>
        </div>
        <div className="text-teal-400 text-center">
          <div className="text-4xl font-bold">0.96 %</div>
          <div className="text-lg">1 Hour</div>
        </div>
        <div className="text-center">
          <div className="text-2xl mb-2">Best Price to Trade</div>
          <div className="text-7xl font-bold mb-2">₹ 26,56,110</div>
          <div className="text-lg text-gray-400">
            Average BTC/INR net price including commission
          </div>
        </div>
        <div className="text-teal-400 text-center">
          <div className="text-4xl font-bold">2.73 %</div>
          <div className="text-lg">1 Day</div>
        </div>
        <div className="text-teal-400 text-center">
          <div className="text-4xl font-bold">7.51 %</div>
          <div className="text-lg">7 Days</div>
        </div>
      </div>

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

      <footer className="text-center">
        <button className="bg-teal-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-bold">
          Add hodlinfo to home screen
        </button>
      </footer>
    </div>
  );
}
