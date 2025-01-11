import React from 'react';
import '../styles/Market.css';

const Market = () => {
  return (
    <div className="market-section section-row">
      <div className="market-content">
        <h2>Market Insights</h2>
        <p>Stay updated with the latest market performance and trends in the cryptocurrency space.</p>
        <div className="market-data">
          <div className="market-card">
            <h3>BTC/USD</h3>
            <p>$34,925</p>
          </div>
          <div className="portfolio-card">
            <h3>ETH/USD</h3>
            <p>$2,547</p>
          </div>
          <div className="third-card">
            <h3>BNB/USD</h3>
            <p>$356</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
