import React, { useEffect } from 'react';
import '../styles/Seasonals.css';

const SeasonalsCard = ({ symbol }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'; 
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol, 
      width: '100%',
      height: 250, 
      theme: 'light',
      locale: 'en',
    });
    document.getElementById('seasonals-widget').appendChild(script);

    return () => {
      document.getElementById('seasonals-widget').innerHTML = ''; 
    };
  }, [symbol]);

  return (
    <div className="seasonals-card">
      <h2>Seasonals</h2>
      <div className="seasonals-graph" id="seasonals-widget">
      </div>
      <p className="seasonals-description">
        This chart shows the seasonal trends for the selected cryptocurrency.
      </p>
    </div>
  );
};

export default SeasonalsCard;
