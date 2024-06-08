import Head from 'next/head';
import Stock from '../components/Stock';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Stock Data</title>
      </Head>
      <h1 className="text-4xl font-bold mb-8">Stock Data</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Stock symbol="AAPL" />
        <Stock symbol="GOOGL" />
        <Stock symbol="MSFT" />
      </div>
    </div>
  );
}