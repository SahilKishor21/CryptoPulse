import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-section section-row">
      <div className="portfolio-content">
        <h2>Your Portfolio</h2>
        <p>Track the value of your crypto assets in one place and get detailed insights into your holdings.</p>
        <div className="portfolio-summary">
          <div className="market-card">
            <h3>Total Balance</h3>
            <p>$45,678</p>
          </div>
          <div className="portfolio-card">
            <h3>24h Profit/Loss</h3>
            <p>+3.76%</p>
          </div>
          <div className="third-card">
            <h3>Total Holdings</h3>
            <p>5 BTC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
