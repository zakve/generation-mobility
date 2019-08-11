import React from 'react';
import Hero from './components/Hero'
import Quote from './components/Quote'
import TableContent from './components/TableContent'
import ContentCard from "./components/ContentCard";
import AppFooter from "./components/AppFooter";
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Quote />
      <TableContent />
      <ContentCard id="why-netherlands" title="Why Netherlands?" text="As a Master's degree student I had opportunity for a six-month exchange stay in another country through Erasmus+ program. I was choosing between Portugal and the Netherlands. On the Googl I was looking for information about every country and because I love cycling, Netherlands was the number 1 choice for me." />
      <ContentCard id="before-flight" title="Before flight" text="Paperwork at school, with the other university, financial contract, air tickets, train tickets, accommodation, what to take, not far but for me the first flight in my life, insurance" />
      <ContentCard id="arrival" title="Arrival" text="" />
      <ContentCard id="after-return" title="After return" text="" />
      <ContentCard id="summary" title="Summary" text="" />
      <AppFooter />
    </div>
  );
}

export default App;
