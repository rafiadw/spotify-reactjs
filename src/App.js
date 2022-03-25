
import './App.css';
import Data from './data/data'
import Card from './components/cardSong/index';

function App() {

  return (
    <div className="App">
      {Data.map(item => <Card image={item.album.images[0].url} album={item.name} artist={item.album.artists[0]?.name} title={item.album.name} key={item.album.name}/>)}
    </div>
  );
}

export default App;
