import React from 'react';
import Hero from './components/Hero'
import Container from '@material-ui/core/Container';
import Quote from './components/Quote'
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Quote />
    </div>
  );
}

export default App;
