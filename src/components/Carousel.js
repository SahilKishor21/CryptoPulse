import React from 'react';
import './Carousel.css';

const Carousel = ({ coins }) => (
  <div className="carousel">
    {coins.map((coin) => (
      <div key={coin.item.id} className="carousel-item">
        <img src={coin.item.thumb} alt={coin.item.name} />
        <p>{coin.item.symbol.toUpperCase()}</p>
        <p>${coin.item.price_btc.toFixed(6)}</p>
      </div>
    ))}
  </div>
);

export default Carousel;
