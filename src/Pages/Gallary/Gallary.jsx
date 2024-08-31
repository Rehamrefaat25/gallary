import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import arrayOfImages from '../../Data'
import './Gallary.css'
const Gallary = () => {
  const { id,name } = useParams();
  const [image, setImage] = useState(null);
  //  useEffect(() => {    const foundImage = arrayOfImages.find(g =>g.id === id ||g.name === name);
  //   setImage(foundImage);  }, [id, name]);
  useEffect(()=>{
    // console.log(arrayOfImages);
    const foundImage=arrayOfImages.find(item=>item.id===id||item.name===name);
    // console.log(foundImage);
    setImage(foundImage)},[id,name]
    
  )
// //   console.log(id);
  return (
    <>
{image?(
    <div className="img-details" >
    <div className="img-gallary" >
              <img className="img" src={image.images.thumbnail}></img>
      <img className="artist-image" src={image.artist.image}></img>
    </div>
              <div className="artist">
              <h2>{image.name}</h2>
              <p>{image. artist.name}</p>
              </div>
      <p className="description1" >
              <label>{ image.year}</label>
              <br></br>
        {image.description}
      </p>


    </div>):(<p>No image found</p>

    )}
    </>
  );
};

export default Gallary;
