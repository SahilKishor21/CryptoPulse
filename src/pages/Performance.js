import React from 'react';
import '../styles/Performance.css';

const PerformanceCard = () => {
  return (
    <div className="performance-card">
      <h2>Performance</h2>
      <div>
        <div className="performance-labels">
          <span>46,930.22</span>
          <span>48,637.83</span>
          <span>49,343.83</span>
        </div>
        <div className="performance-bar">
          <div className="performance-bar-fill">
            <div className="performance-bar-indicator"></div>
          </div>
        </div>
        <div className="performance-labels">
          <span>Today’s Low</span>
          <span>Today’s High</span>
        </div>
      </div>

      <div className="fundamentals">
        <h3>Fundamentals</h3>
        <div className="fundamental-item">
          <span className="label">Bitcoin Price</span>
          <span className="value">$16,815.46</span>
        </div>
        <div className="fundamental-item">
          <span className="label">Market Cap</span>
          <span className="value">$323,507,290,047</span>
        </div>
        <div className="fundamental-item">
          <span className="label">24H Low / 24H High</span>
          <span className="value">$16,382.07 / $16,874.12</span>
        </div>
        <div className="fundamental-item">
          <span className="label">Market Cap Dominance</span>
          <span className="value">38.343%</span>
        </div>
        <div className="fundamental-item">
          <span className="label">7D Low / 7D High</span>
          <span className="value">$16,382.07 / $16,874.12</span>
        </div>
        <div className="fundamental-item">
          <span className="label">Trading Volume</span>
          <span className="value">$23,249,202,782</span>
        </div>
        <div className="fundamental-item">
          <span className="label">All-Time High</span>
          <span className="value">$69,044.77 (Nov 10, 2021)</span>
        </div>
        <div className="fundamental-item">
          <span className="label">All-Time Low</span>
          <span className="value">$67.81 (Jul 06, 2013)</span>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
