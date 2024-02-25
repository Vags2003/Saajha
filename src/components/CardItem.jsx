import React from 'react';
import { NGOHome } from '../pages/NGOHome'

function CardItem() {

  const cardsData = [
    {
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: 'NGO 1',
      title: 'NGO 1',
      description: 'Description of NGO 1',
      buttonText: 'View more'
    },
    {
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: 'NGO 2',
      title: 'NGO 2',
      description: 'Description of NGO 2',
      buttonText: 'View more'
    },
    {
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: 'NGO 3',
      title: 'NGO 3',
      description: 'Description of NGO 3',
      buttonText: 'View more'
    }
    // Add more cards as needed
  ]

  return (
    <div className="card-wrapper">
      {cardsData.map((card, index) => (
        <NGOHome key={index} {...card} />
      ))}
    </div>
  );
};

export default CardItem;
