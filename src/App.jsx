import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Agenda from './components/Agenda';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
  useScrollReveal();

  return (
    <div className="app">
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="agenda"><Agenda /></div>
      <div id="footer"><Footer /></div>
    </div>
  );
}

export default App;
