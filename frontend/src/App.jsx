import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import BestPrice from "./components/BestPrice";
import TableData from "./components/TableData";

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-9">
      <Header />
      <BestPrice />
      <TableData />
      <Footer />
    </div>
  );
}
