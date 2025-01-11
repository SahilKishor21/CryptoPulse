import React from 'react';
import './SlidingHeader.css';

const SlidingHeader = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sliding-header">
      <div className="nav-item" onClick={() => scrollToSection('performance')}>Performance</div>
      <div className="nav-item" onClick={() => scrollToSection('about')}>About</div>
      <div className="nav-item" onClick={() => scrollToSection('portfolio')}>Portfolio</div>
      <div className="nav-item" onClick={() => scrollToSection('market')}>Market</div>
    </div>
  );
};

export default SlidingHeader;
