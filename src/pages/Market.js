import React from 'react';
import '../styles/Market.css';

const Market = () => {
  return (
    <div className="market-page">
      <h1>Market Overview</h1>
      <p>
        Get the latest updates on cryptocurrency prices, trends, and market capitalization. Stay ahead of the market with our real-time data.
      </p>
      <div className="market-info">
        <div className="market-card">
          <h3>Bitcoin (BTC)</h3>
          <p>Price: $68,000</p>
          <p>24H Change: +3.5%</p>
        </div>
        <div className="market-card">
          <h3>Ethereum (ETH)</h3>
          <p>Price: $4,800</p>
          <p>24H Change: +2.1%</p>
        </div>
        <div className="market-card">
          <h3>Cardano (ADA)</h3>
          <p>Price: $2.30</p>
          <p>24H Change: -1.2%</p>
        </div>
      </div>
    </div>
  );
};

export default Market;
