
import './App.css';
// import Data from './data/data'
// import Card from './components/cardSong/index';
import Spotify from './components/spotify/index';


function App() {
  const url = `https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json`;
  fetch(url).then(response => console.log(response.data))

  return (
    <div className="App">
      <Spotify/>
      
    </div>
  );
}

export default App;
