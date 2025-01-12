import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Market from './pages/Market';
import Home from './pages/Home';
import Performance from './pages/Performance';
import SlidingHeader from './components/SlidingHeader'; 
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main className="main-content">
        <section className="dashboard">
          <h2>Crypto Dashboard</h2>
          <Home />
        </section>
        <SlidingHeader />
        <section className="sections-wrapper">
          <div className="section-row" id="about">
            <Performance />
          </div>
          <div className="section-row" id="about">
            <About />
          </div>
          <div className="section-row" id="portfolio">
            <Portfolio />
          </div>
          <div className="section-row" id="market">
            <Market />
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
