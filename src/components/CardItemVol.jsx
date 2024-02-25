import React, { useState } from 'react';
import { Volunteer } from '../pages/Volunteer';

function CardItemVol() {
  const [cardsData, setCardsData] = useState([
    {
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: 'NGO 1',
      title: 'NGO 1',
      description: 'Description of NGO 1',
      buttonView: 'View More',
      buttonStatus: 'View Status',
      buttonApply: 'Apply' // Initialize all buttons as "Apply"
    },
    {
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: 'NGO 2',
      title: 'NGO 2',
      description: 'Description of NGO 2',
      buttonView: 'View More',
      buttonStatus: 'View Status',
      buttonApply: 'Apply' // Initialize all buttons as "Apply"
    },
    {
      imgSrc: "https://picsum.photos/300/200",
      imgAlt: 'NGO 3',
      title: 'NGO 3',
      description: 'Description of NGO 3',
      buttonView: 'View More',
      buttonStatus: 'View Status',
      buttonApply: 'Apply' // Initialize all buttons as "Apply"
    }
    // Add more cards as needed
  ]);

  // Function to handle applying to a card
  const handleApply = (index) => {
    const shouldApply = window.confirm('Are you sure you want to apply?');
    if (shouldApply) {
      const updatedCardsData = [...cardsData]; // Create a copy of the cards data array
      updatedCardsData[index].buttonApply = 'Applied'; // Update the button label to "Applied"
      setCardsData(updatedCardsData); // Update the state with the modified cards data
    }
  };

  return (
    <div className="card-wrapper">
      {cardsData.map((card, index) => (
        <Volunteer 
          key={index} 
          {...card} 
          index={index}
          handleApply={handleApply}
        />
      ))}
    </div>
  );
};

export default CardItemVol;

