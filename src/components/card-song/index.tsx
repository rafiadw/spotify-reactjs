import "./style.css";
import React from "react";

function CardSong({image,album,title,artist,buttonName,selectedHandle} : {image: string,
  album: string,
  title: string,
  artist: string,
  buttonName: string,
  selectedHandle: React.MouseEventHandler<HTMLButtonElement>}): JSX.Element {
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
          by <strong>{artist}</strong>
        </p>
      </div>
      <div className="cardButton">
        <button onClick={selectedHandle}>{buttonName}</button>
      </div>
    </div>
  );
}

export default CardSong;
