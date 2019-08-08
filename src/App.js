import React from 'react';
import AppBar from './components/AppBar';
import Container from '@material-ui/core/Container';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </Container>
    </div>
  );
}

export default App;
