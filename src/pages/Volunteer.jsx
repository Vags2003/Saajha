import React, { useState } from 'react';
import '../index.css';

export const Volunteer = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonView,
  buttonStatus,
  buttonApply,
  index,
  handleApply
}) => {
    
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyClick = () => {
    const shouldApply = window.confirm('Are you sure you want to apply?');
    if (shouldApply) {
      setIsApplied(true);
      handleApply(index);
    }
  };

  return (
    <div className="card-container">      
      {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className="card-image" />}
      <div className='card-body'>
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonView && <button className="view-button">{buttonView}</button>}
      {buttonStatus && <button className="status-button">{buttonStatus}</button>}
      {buttonApply && (
        <button 
          className={`apply-button ${isApplied ? 'applied' : ''}`}
          onClick={handleApplyClick}
        >
          {isApplied ? 'Applied' : buttonApply}
        </button>
      )}
      </div>
    </div>
  );
};
