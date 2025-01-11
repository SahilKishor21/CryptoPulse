import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <h1>Your Portfolio</h1>
      <p>
        Track the performance of your cryptocurrency investments in real time. Analyze your portfolio growth and diversification.
      </p>
      <div className="portfolio-stats">
        <div className="portfolio-card">
          <h3>Total Value</h3>
          <p>$100,000</p>
        </div>
        <div className="portfolio-card">
          <h3>Bitcoin (BTC)</h3>
          <p>50% - $50,000</p>
        </div>
        <div className="portfolio-card">
          <h3>Ethereum (ETH)</h3>
          <p>30% - $30,000</p>
        </div>
        <div className="portfolio-card">
          <h3>Other</h3>
          <p>20% - $20,000</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
