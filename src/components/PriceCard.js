import React from 'react';
import './PriceCard.css';

const PriceCard = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="price-card">
      <h2>Bitcoin (BTC)</h2>
      <p>USD: ${data.usd}</p>
      <p>INR: ₹{data.inr}</p>
      <p>24h Change: {data.usd_24h_change.toFixed(2)}%</p>
    </div>
  );
};

export default PriceCard;
