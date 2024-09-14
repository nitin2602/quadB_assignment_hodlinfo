import React from "react";

const BestPrice = () => {
  return (
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
  );
};

export default BestPrice;
