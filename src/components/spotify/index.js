import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSong from "../cardSong/index"

function Spotify() {

  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_WEB_API;
  const REDIRECT_URI = "http://localhost:3000/callback";
  const SCOPE = "playlist-modify-private";
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";

  const [token,setToken] = useState("");
  const [searchQuery, setSearhcQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  const [isInSearch, setIsInSearch] = useState(false);



  const getParamsSpotfyAuth = (hash) => {
      const stringAfterHashtag = hash.substring(1);
      const paramsInUrl = stringAfterHashtag.split("&");
      const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
      console.log(currentValue);
      const [key, value] = currentValue.split("=");
      accumulater[key] = value;
      return accumulater;
      }, {});
  return paramsSplitUp;
  }
  
  useEffect (()=> {
    if(!isInSearch){
        const selectedTracks = tracks.filter((track) => selectedTracksUri.includes(track.uri));
        setTracks(selectedTracks);
    }
}, [selectedTracksUri, isInSearch, tracks]);

  useEffect(() => {
      if (window.location.hash) {
          const { access_token } =
          getParamsSpotfyAuth(window.location.hash);
          setToken(access_token)
        }
  }, []);

  const handleLogout = () => {
      setToken("")
  }

  const inputHandle = (e) => {
      const inputValue = e.target.value;
      setSearhcQuery(inputValue)
  }

  const searchTracks = async (event) => {
      axios
      .get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: `${searchQuery}`,
          type: "track",
        },
      })
      .then((response) => {
        setIsInSearch(true);
        const data = response.data.tracks.items
        const selectedTracks = tracks.filter((track)=>selectedTracksUri.includes(track.uri));
        const searchedTracks = data.filter((track)=> !selectedTracksUri.includes(track.uri));
        setTracks([...selectedTracks, ...searchedTracks]);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  console.log(tracks)

  const handleLogin = () => {
      const url = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
      window.location = url;
  }

  const selectHandle = (track) => {
    const uri = track.uri;
    if (selectedTracksUri.includes(uri)) {
        setSelectedTracksUri(selectedTracksUri.filter((item) => item !== uri));
    } else {
        setSelectedTracksUri([...selectedTracksUri, uri]);
    }
  }
  
  const renderTracks = () => {
   return tracks.map((item) => (
      <CardSong image={item.album.images[0].url} 
      album={item.name} 
      artist={item.album.artists[0]?.name} 
      title={item.album.name} 
      key={item.id} 
      selectHandle = {() => selectHandle(item)}/>
      ) 
    )
  }

      return(
          <div>
             {!token ?
                  <button onClick={handleLogin}>Login</button>
                  : <button onClick={handleLogout}>Logout</button>}

              {token ?
                  <form onSubmit={searchTracks}>
                      <input type="text" onChange={inputHandle}/>
                      <button type="submit">Search</button>
                  </form>

                  : <h2>{tracks}</h2>
              }

              {renderTracks()}
          </div>
      )
}

export default Spotify;