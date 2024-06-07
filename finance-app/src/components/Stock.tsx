import React from "react";
import useStockData from "../hooks/useStockData";
import Calendar from "../components/icons/Calendar";
import {Open} from "./icons/Open";
import {Low} from "./icons/Low";
import {High} from "./icons/High";
import {Close} from "./icons/Close";
import {Volumen} from "./icons/Volumen";

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
          <p>
            <Calendar /> {latestDate}
          </p>
          <p>
            <strong>Open:</strong> {latestData["1. open"]}
          </p>
          <p>
            <strong>High:</strong> {latestData["2. high"]}
          </p>
          <p>
            <strong>Low:</strong> {latestData["3. low"]}
          </p>
          <p>
            <strong>Close:</strong> {latestData["4. close"]}
          </p>
          <p>
            <strong>Volume:</strong> {latestData["5. volume"]}
          </p>
        </>
      )}
      <div className="mt-2">
        <p className="flex justify-end align-bottom pb-2 text-gray-600">
          2024-06-06 <Calendar />
        </p>
        <div className="flex align-bottom pb-2 text-green-600 group relative">
          195.6950 <Open name={"Open"}/>
        </div>
        <p className="flex align-bottom pb-2 text-blue-600 group relative">
          196.6000 <High name={"High"}/>
        </p>
        <p className="flex align-bottom pb-2 text-red-600 group relative">
          194.1700 <Low name={"Low"}/>
        </p>
        <p className="flex align-bottom pb-2 text-orange-600 group relative">
          194.4800 <Close name={"Close"}/>
        </p>
        <p className="flex align-bottom pb-2 text-slate-900 group relative">
          41181753 <Volumen name={"Volumen"}/>
        </p>
      </div>
    </div>
  );
};

export default Stock;
