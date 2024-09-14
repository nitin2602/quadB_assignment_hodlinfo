import React from "react";

const BestPrice = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8 mt-12">
      <div className="text-teal-400 text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono">
          0.1 %
        </div>
        <div className="text-sm sm:text-base md:text-lg">5 Mins</div>
      </div>
      <div className="text-teal-400 text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono">
          0.96 %
        </div>
        <div className="text-sm sm:text-base md:text-lg">1 Hour</div>
      </div>
      <div className="text-center col-span-2 sm:col-span-1 md:col-span-1">
        <div className="text-lg sm:text-xl md:text-2xl mb-2">
          Best Price to Trade
        </div>
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 font-mono flex justify-center items-baseline">
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mr-1">
            ₹
          </span>
          <span>26,56,110</span>
        </div>
        <div className="text-xs sm:text-sm md:text-base text-gray-400">
          Average BTC/INR net price including commission
        </div>
      </div>
      <div className="text-teal-400 text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono">
          2.73 %
        </div>
        <div className="text-sm sm:text-base md:text-lg">1 Day</div>
      </div>
      <div className="text-teal-400 text-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono">
          7.51 %
        </div>
        <div className="text-sm sm:text-base md:text-lg">7 Days</div>
      </div>
    </div>
  );
};

export default BestPrice;
