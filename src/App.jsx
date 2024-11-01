import React from 'react';
import './App.css';
import DiscountCalculator from './components/DiscountCalculator';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <DiscountCalculator />
      <Footer />
    </div>
  );
}

export default App;
