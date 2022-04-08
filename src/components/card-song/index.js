import "./style.css";

function CardSong({
  image,
  album,
  title,
  artist,
  selectedHandle,
  toggleSelect,
  buttonName,
}) {
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
        <button onClick={() => selectedHandle(toggleSelect)}>
          {buttonName}
        </button>
      </div>
    </div>
  );
}

export default CardSong;
