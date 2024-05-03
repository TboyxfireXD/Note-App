import React from 'react';
import Card from './Cards';

const cardData = [
  {
    title: "Bukayo Saka",
    position: "Winger",
    image: "",
    age : 23,
    height : 5.10,
    team : "Arsenal"
  },
  {
    title: "Leandro Trossard",
    position: "Winger",
    image: "",
    age : 23,
    height : 5.10,
    team : "Arsenal"
  },
  {
    title: "David Raya",
    position: "Goal Keeper",
    image: "",
    age : 23,
    height : 5.10,
    team : "Arsenal"
  }
];

const App = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default App;