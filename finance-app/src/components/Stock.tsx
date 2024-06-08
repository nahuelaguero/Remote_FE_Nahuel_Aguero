import React from "react";
import useStockData from "../hooks/useStockData";
import Calendar from "../components/icons/Calendar";
import { Open } from "../components/icons/Open";
import { Low } from "../components/icons/Low";
import { High } from "../components/icons/High";
import { Close } from "../components/icons/Close";
import { Volumen } from "../components/icons/Volumen";

interface StockProps {
  symbol: string;
}

const Stock: React.FC<StockProps> = ({ symbol }) => {
  const { stockData, loading, error } = useStockData(symbol);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const latestDate = stockData ? Object.keys(stockData)[0] : "";
  const latestData = stockData ? stockData[latestDate] : null;

  return (
    <div className="p-4 border border-gray-600 rounded shadow-lg bg-slate-50">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{symbol}</h2>
      {latestData && (
        <>
          <p className="flex justify-end align-bottom pb-2 text-gray-600">
            {latestDate} <Calendar />
          </p>
          <div className="flex align-bottom pb-2 text-green-600 group relative">
            {latestData["1. open"]} <Open name="Open" />
          </div>
          <p className="flex align-bottom pb-2 text-blue-600 group relative">
            {latestData["2. high"]} <High name="High" />
          </p>
          <p className="flex align-bottom pb-2 text-red-600 group relative">
            {latestData["3. low"]} <Low name="Low" />
          </p>
          <p className="flex align-bottom pb-2 text-orange-600 group relative">
            {latestData["4. close"]} <Close name="Close" />
          </p>
          <p className="flex align-bottom pb-2 text-slate-900 group relative">
            {latestData["5. volume"]} <Volumen name="Volumen" />
          </p>
        </>
      )}
    </div>
  );
};

export default Stock;