import React from 'react';
import useStockData from '../hooks/useStockData';

interface StockProps {
  symbol: string;
}

const Stock: React.FC<StockProps> = ({ symbol }) => {
  const { stockData, loading, error } = useStockData(symbol);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const latestDate = stockData ? Object.keys(stockData)[0] : '';
  const latestData = stockData ? stockData[latestDate] : null;

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{symbol}</h2>
      {latestData && (
        <>
          <p><strong>Date:</strong> {latestDate}</p>
          <p><strong>Open:</strong> {latestData['1. open']}</p>
          <p><strong>High:</strong> {latestData['2. high']}</p>
          <p><strong>Low:</strong> {latestData['3. low']}</p>
          <p><strong>Close:</strong> {latestData['4. close']}</p>
          <p><strong>Volume:</strong> {latestData['5. volume']}</p>
        </>
      )}
    </div>
  );
};

export default Stock;