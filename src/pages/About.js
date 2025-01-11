import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-section section-row">
      <div className="about-content">
        <h2>About Bitcoin</h2>
        <p>
        Bitcoin (BTC) is a cryptocurrency (a virtual currency) designed to act as money and a form of payment outside the control of any one person, group, or entity.
        This removes the need for trusted third-party involvement (e.g., a mint or bank) in financial transactions.
        </p>
        <p>
        Bitcoin was introduced to the public in 2008 by an anonymous developer or group of developers using the name Satoshi Nakamoto. It has since become the most well-known and largest cryptocurrency in the world. Its popularity has inspired the development of many other cryptocurrencies.
        </p>
        <div className="about-buttons">
          <button className="btn-secondary">Download Tax Report</button>
          <button className="btn-secondary">Calculate Profits</button>
        </div>
      </div>
    </div>
  );
};

export default About;
