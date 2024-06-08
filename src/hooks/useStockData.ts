import { useState, useEffect } from 'react';
import { fetchStockData } from '../lib/api';
import { StockData } from '../types';

const useStockData = (symbol: string) => {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchStockData(symbol);
        setStockData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [symbol]);

  return { stockData, loading, error };
};

export default useStockData;