import React from 'react'
import '../index.css';

export const NGOHome = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} className="card-image" />}
      <div className="card-body">
        {title && <h1 className="card-title">{title}</h1>}
        {description && <p className="card-description">{description}</p>}
        {buttonText && <button className="card-button">{buttonText}</button>}
      </div>     
    </div>
  );
};