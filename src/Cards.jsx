import React from 'react';

const Card = ({ title, position, image, age, height, team  }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h2>{title}</h2>
      <p>{position}</p>
      <p>{age}</p>
      <p>{height}</p>
      <p>{team}</p>
    </div>
  );
};

export default Card;