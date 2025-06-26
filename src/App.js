import React from 'react';
import Header from './components/Header';
import AuthPrompt from './components/AuthPrompt';
import PortfolioSection from './components/PortfolioSection';
import './App.css';

function App() {
  return (
    <div className="App light-theme">
      <Header />
      <AuthPrompt />
      <div className="container my-5">
        <div className="row justify-content-center g-4">
          <div className="col-md-6 col-lg-5 mb-4">
            <PortfolioSection initialIsDarkMode={false} />
          </div>
          <div className="col-md-6 col-lg-5 mb-4">
            <PortfolioSection initialIsDarkMode={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;