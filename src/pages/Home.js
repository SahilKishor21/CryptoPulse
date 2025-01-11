import React, { useEffect, useState } from 'react';
import { getBitcoinPrice, getTrendingCoins } from '../services/coingeckoAPI';
import PriceCard from '../components/PriceCard';
import TrendingCoins from '../components/TrendingCoins';
import ChartWidget from '../components/ChartWidget';
import Carousel from '../components/Carousel';
import '../styles/App.css';

const Home = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [priceResponse, trendingResponse] = await Promise.all([
        getBitcoinPrice(),
        getTrendingCoins(),
      ]);
      setBitcoinData(priceResponse.data.bitcoin);
      setTrendingCoins(trendingResponse.data.coins.slice(0, 3)); // Top 3 trending coins
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <PriceCard data={bitcoinData} />
      <ChartWidget coin="BTCUSD" />
      <TrendingCoins coins={trendingCoins} />
      <Carousel coins={trendingCoins} />
    </div>
  );
};

export default Home;
