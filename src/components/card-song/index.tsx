import "./style.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";


type DataTrack = {
  image: string,
  album: string,
  title: string,
  artist: string,
  uri: string,
  buttonName: string,
  selectedHandle: React.MouseEventHandler<HTMLButtonElement>
}

function CardSong({
  image,
  album,
  title,
  artist,
  uri,
  buttonName,
  selectedHandle
} : DataTrack) {


  //const selectedTrack = useSelector((state) => state.track);
  // const selectedHandle = () => {
  //   if (selectedTrack.some(item => item.uri === uri)) {
  //     setSelectedTrack((item) => item.filter((id) => id !== uri));
  //   } else {
  //     setSelectedTrack((item) => [...item, uri]);
  //   }
  // };


  return (
    <div data-testid="card-song" className="cardSong">
      <div className="cardImage">
        <img src={image} alt={title} />
      </div>
      <div className="cardInfo">
        <p className="album">
          Album <strong>{album}</strong>
        </p>
        <h1>{title}</h1>
        <p>
          Artists <strong>{artist}</strong>
        </p>
      </div>
      <div className="cardButton">
        <button onClick={selectedHandle}>{buttonName}</button>
      </div>
    </div>
  );
}

export default CardSong;
