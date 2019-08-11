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
      <ContentCard id="why-netherlands" title="Why Netherlands?" text="As a Master's degree student I had opportunity for a six-month exchange stay in another country through Erasmus+ program. I was choosing between Portugal and the Netherlands. On the Google I was looking for information about every country and because I love cycling, Netherlands was the number 1 choice for me." />
      <ContentCard id="before-flight" title="Before flight" text="I decided to travel abroad in 2016. Until then, I didn't travel too often. I visited our neighbors Poland, Slovakia, Austria and Germany. I was on holiday in Croatia and Italy few times, but I have never flown by airplane until this time. Before the trip I had to pass a selection procedure in Erasmus+ program. However, due to the good average of the stamps I was chosen and paperwork began. I had to sign and send a lot of papers for my and foreign faculty. But paperwork was nothing compared to receiving €400 per month from my school and the opportunity to study abroad. It was up to me to arrange accommodation, airline tickets and pack things for six months. The closer my departure date was, the more I was afraid, but I still knew I wouldn't regret it because I heard from friends around me that it was one of their best things in their lives. I packed one big suitcase, a hand luggage and a laptop bag and flew." />
      <ContentCard id="arrival" title="Arrival" text="I was thinking about a lot of things in the plane. Can I get on the right train to Groningen? How do I get from the station to my accommodation? I forgot to say I didn't speak English at all! Already in Amsterdam at the airport a lot of people from the school were waiting for us, who helped students from abroad what ticket to buy, which train to get on and other things. Upon arrival in Groningen, I boarded the bus and drove to the student house, where I checked in and got the room keys. I felt great that I managed everything and arrived at the right place. From the very beginning I felt great! Everyone was riding a bike, nobody was in a hurry, the air was clean and fresh and everywhere was a lot of green. The only thing I had to do when I arrived was to register at the town hall, because I had to stay in the Netherlands for more than 3 months. The processing was absolutely simple, I brought the ID card and the lady filled out the form for me and I signed it - without queues, without swearing that I do not have the correct form and without stress, something I had not known before. I really fell in love with the Netherlands and I did not miss the Czech Republic. I was excited about cycling lanes, almost no cars in the center, recycling PET bottles, a solar waste bin and more. Everything was amazing, but I just missed something. It was nature and mountains that I was looking forward to home." />
      <ContentCard id="after-return" title="After return" text="I was very disappointed when I arrived to Prague at the main station. Everyone was in a hurry, a lot of homeless people and noise from cars. When I arrived in Brno it was even worse. There were dirt and garbage that I was not used to in the Netherlands. The air was much worse and I missed the bike. After a few days, I headed for nature and the mountains I was looking forward to. Finally, I filled out a few papers for both universities and that closed my Erasmus. I tried to keep a positive spirit, but after a few months around the rushing people I became Czech again." />
      <ContentCard id="summary" title="Summary" text="It was an unforgettable experience to move to another country for half a year. I still have a lot of photos on the shelf from the Netherlands. Now I have a lot of friends around the world, with whom I still messaging and make trips. I have already visited Denmark, America, Canada and Ireland with them and we are planning another. I can say that it was really one of the best things in my life and I would recommend it to everyone!" />
      <AppFooter />
    </div>
  );
}

export default App;
