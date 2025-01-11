import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Function to render the correct page
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      <main className="main-content container">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
