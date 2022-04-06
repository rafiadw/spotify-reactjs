import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSong from "../../components/card-song/index";
import Search from "../../components/search-bar/index";
import CreatePlaylist from "../../components/create-playlist/index";
import useSearch from "../../hooks/useSearch";
import { useSelector, useDispatch } from "react-redux";
import { saveToken } from "../../redux/token-action";

function Spotify() {
  const CLIENT_ID = "8f9fc624420548318eaed2f767f81eb0";
  const REDIRECT_URI = "http://localhost:3000/callback";
  const SCOPE = "playlist-modify-private";
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
  const getToken = new URLSearchParams(window.location.hash).get(
    "#access_token"
  );
  const { tracks, inputHandle, searchHandle, token, setToken } = useSearch();
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
  });
  const [selectedTrack, setSelectedTrack] = useState([]);

  const access_token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();
  dispatch(saveToken(getToken));

  const handleLogout = () => {
    setToken("");
  };

  const selectedHandle = (uri) => {
    setSelectedTrack((item) => item.filter((id) => id !== uri));
  };

  const deselectedHandle = (uri) => {
    setSelectedTrack((item) => [...item, uri]);
  };

  const handleFormPlaylist = (event) => {
    const { name, value } = event.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  const renderTracks = () => {
    return tracks.map((item) => (
      <CardSong
        image={item.album.images[0].url}
        album={item.album.name}
        artist={item.album.artists[0]?.name}
        title={item.name}
        key={item.id}
        toggleSelect={selectedTrack.includes(item.uri)}
        selectedHandle={(selectedHandle) =>
          selectedHandle ? selectedHandle(item.uri) : deselectedHandle(item.uri)
        }
        buttonName={selectedTrack.includes(item.uri) ? "deselect" : "select"}
      />
    ));
  };

  return (
    <div>
      {!token ? (
        <button>
          <a href={AUTH_URL}>Login</a>
        </button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      {token ? (
        <>
          <Search handleOnChange={inputHandle} handleOnSubmit={searchHandle} />
          <CreatePlaylist
            playlist={playlist}
            handleOnChange={handleFormPlaylist}
          />
          {renderTracks()}
        </>
      ) : (
        <h2>Welcome</h2>
      )}
    </div>
  );
}

export default Spotify;
