import React from 'react';
import './TrendingCoins.css';

const TrendingCoins = ({ coins }) => (
  <div className="trending-coins">
    <h3>Trending Coins (24h)</h3>
    <ul>
      {coins.map((coin) => (
        <li key={coin.item.id}>
          <img src={coin.item.small} alt={coin.item.name} />
          <p>{coin.item.name}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default TrendingCoins;
