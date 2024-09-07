import React from 'react';
import Header from './Header';
import Feed from './Feed';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Feed />
      </div>
      <Footer />
    </div>
  );
}

export default App;
