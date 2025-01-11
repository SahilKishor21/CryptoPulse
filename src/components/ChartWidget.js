import React, { useEffect } from 'react';
import './ChartWidget.css';

const ChartWidget = ({ coin }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: coin,
      width: '100%',
      height: 400,
      theme: 'light',
      locale: 'en',
    });
    document.getElementById('tradingview-widget').appendChild(script);

    return () => {
      document.getElementById('tradingview-widget').innerHTML = '';
    };
  }, [coin]);

  return <div id="tradingview-widget" />;
};

export default ChartWidget;
