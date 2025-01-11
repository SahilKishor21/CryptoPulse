import React from 'react';
import './PriceCard.css';

const PriceCard = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="price-card">
      <div className="price-card-header">
        <div className="crypto-info">
          <img
            src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" 
            alt="Bitcoin"
            className="crypto-logo"
          />
          <div>
            <h2 className="crypto-name">Bitcoin <span className="crypto-symbol">BTC</span></h2>
          </div>
        </div>
        <div className="rank-badge">Rank #1</div>
      </div>
      <div className="price-details">
        <p className="price-usd">${data.usd.toLocaleString()}</p>
        <p className="price-inr">₹{data.inr.toLocaleString()}</p>
        <div className={`price-change ${data.usd_24h_change > 0 ? 'positive' : 'negative'}`}>
          {data.usd_24h_change > 0 ? '▲' : '▼'} {data.usd_24h_change.toFixed(2)}% <span className="time-frame">(24H)</span>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
