import "./style.css";
import React from "react";

type DataTrack = {
  image: string,
  album: string,
  title: string,
  artist: string,
  selectedHandle: React.MouseEventHandler<HTMLButtonElement>,
  buttonName: string,
}

function CardSong({
  image,
  album,
  title,
  artist,
  selectedHandle,
  buttonName,
} : DataTrack) {
  return (
    <div className="cardSong">
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
