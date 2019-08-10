import React from 'react';
import Hero from './components/Hero'
import Quote from './components/Quote'
import TableContent from './components/TableContent'
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Quote />
      <TableContent />
    </div>
  );
}

export default App;
