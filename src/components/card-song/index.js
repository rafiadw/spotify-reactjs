import "./index.css";
import { useState } from "react";

function CardSong({ image, album, title, artist, toggleSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);
    toggleSelect();
  };
  return (
    <div className="cardSong">
      <div className="cardImage">
        <img src={image} alt={title} />
      </div>
      <div className="cardInfo">
        <p>
          Album <strong>{album}</strong>
        </p>
        <h1>{title}</h1>
        <p>
          Artists <strong>{artist}</strong>
        </p>
      </div>
      <div className="cardButton">
        <button onClick={handleSelect}>
          {isSelected ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
}

export default CardSong;
