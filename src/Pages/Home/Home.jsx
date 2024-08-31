import React from 'react'
import { Link } from "react-router-dom";
import arrayOfImages from '../../Data';
import './Home.css'
const Home=()=> {
  return (
    
    <>
      <div id="imagesWrapper">
        {arrayOfImages.map((image) => {
          return (
            <Link to={`/Gallary/${image.id}/${image.name}`}>
            <div className={image.class}>

              <div className="image-box" key={image.id}>

              <img src={image.images.thumbnail}></img>
              <div className='details'>
                <h2>{image.name}</h2>
                <span>{image.artist.name}</span>
              </div>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Home

