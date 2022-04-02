import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSong from "../../components/card-song/index";
import Search from "../../components/search-bar/index";

function Spotify() {
  const CLIENT_ID = "8f9fc624420548318eaed2f767f81eb0";
  const REDIRECT_URI = "http://localhost:3000/callback";
  const SCOPE = "playlist-modify-private";
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";

  const [token, setToken] = useState("");
  const [searchQuery, setSearhcQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  const [isInSearch, setIsInSearch] = useState(false);

  useEffect(() => {
    if (!isInSearch) {
      const selectedTracks = tracks.filter((track) =>
        selectedTracksUri.includes(track.uri)
      );
      setTracks(selectedTracks);
    }
  }, [selectedTracksUri]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/search?type=track&q=${searchQuery}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsInSearch(true);
      const data = await response.data.tracks.items;
      const selectedTracks = tracks.filter((track) =>
        selectedTracksUri.includes(track.uri)
      );
      const searchedTracks = data.filter(
        (track) => !selectedTracksUri.includes(track.uri)
      );

      setTracks([...selectedTracks, ...searchedTracks]);
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };

  const inputHandle = (e) => {
    const inputValue = e.target.value;
    setSearhcQuery(inputValue);
  };

  const handleLogin = () => {
    const url = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
    window.location = url;
    console.log(url);
  };

  const toggleSelect = (track) => {
    const uri = track.uri;
    if (selectedTracksUri.includes(uri)) {
      setSelectedTracksUri(selectedTracksUri.filter((item) => item !== uri));
    } else {
      setSelectedTracksUri([...selectedTracksUri, uri]);
    }
  };

  const renderTracks = () => {
    return tracks.map((item) => (
      <CardSong
        image={item.album.images[0].url}
        album={item.album.name}
        artist={item.album.artists[0]?.name}
        title={item.name}
        key={item.id}
        toggleSelect={() => toggleSelect(item)}
      />
    ));
  };

  return (
    <div>
      {!token ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      {token ? (
        <Search handleOnChange={inputHandle} handleOnSubmit={handleSearch} />
      ) : (
        <h2>{tracks}</h2>
      )}

      {renderTracks()}
    </div>
  );
}

export default Spotify;
