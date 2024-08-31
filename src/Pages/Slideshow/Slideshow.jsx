import React, { useState } from 'react';
import './Slideshow.css';
import arrayOfImages from '../../Data';
import Gallary from '../Gallary/Gallary';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const showNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === arrayOfImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? arrayOfImages.length - 1 : prevIndex - 1
    );
  };

  const currentImage = arrayOfImages[currentIndex];

  return (<>

    <div className="slideshow-container">
    <div className='show'>
      <img className="slideshow-image" src={currentImage.images.thumbnail} alt={currentImage.name}/>
<img className='artist2' src={currentImage.artist.image}></img>
    </div>
    <div className='artist-name'>
      <h2>{currentImage.name}</h2>
      <p>{currentImage.artist.name}</p>
</div>
      <p className='description'>
      <label>{currentImage.year}</label>
      <br></br>
      {currentImage.description}</p>
</div>


      <div className='slide'>
<div>
      <h2>{currentImage.name}</h2>
      <p>{currentImage.artist.name}</p>
</div>
      <div>
      <a className="prev" onClick={showPrev}>&#10094;</a>
      <a className="next" onClick={showNext}>&#10095;</a>
     </div>
      </div>
  </>
  );
};

export default Slideshow;
