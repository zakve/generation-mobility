import React from 'react';
import Hero from './components/Hero'
import Quote from './components/Quote'
import TableContent from './components/TableContent'
import ContentCard from "./components/ContentCard";
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Quote />
      <TableContent />
      <ContentCard />
    </div>
  );
}

export default App;
