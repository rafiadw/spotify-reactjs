import './index.css'

function CardSong ({image, album, title, artist}){
return (
    <div className='cardSong'>
        <div className='cardImage'>
        <img src={image} alt={title}/>
        </div>
        <div className='cardInfo'>
        <p>Album <strong>{album}</strong></p>
        <h1>{title}</h1>
        <p>Artists <strong>{artist}</strong></p>
        </div>
        <div className='cardButton'>
        <button>Select</button>
        </div>
      </div>
);
}

export default CardSong;