import React, { useState } from 'react';
import About from '../pages/About';
import Market from '../pages/Market';
import Portfolio from '../pages/Portfolio';
import './Header.css';

const Header = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'market':
        return <Market />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      default:
        return <h1>Welcome to CryptoDashboard</h1>;
    }
  };

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1 onClick={() => setActivePage('home')}>CryptoDashboard</h1>
          </div>
          <nav className="nav">
            <button
              onClick={() => setActivePage('home')}
              className={activePage === 'home' ? 'active' : ''}
            >
              Home
            </button>
            <button
              onClick={() => setActivePage('market')}
              className={activePage === 'market' ? 'active' : ''}
            >
              Market
            </button>
            <button
              onClick={() => setActivePage('portfolio')}
              className={activePage === 'portfolio' ? 'active' : ''}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActivePage('about')}
              className={activePage === 'about' ? 'active' : ''}
            >
              About
            </button>
          </nav>
        </div>
      </header>
      <main>{renderPage()}</main>
    </div>
  );
};

export default Header;
