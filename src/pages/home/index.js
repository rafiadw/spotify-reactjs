import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSong from "../../components/card-song/index";
import Search from "../../components/search-bar/index";
import CreatePlaylist from "../../components/create-playlist/index";
import useSearch from "../../hooks/useSearch";

function Spotify() {
  const CLIENT_ID = "8f9fc624420548318eaed2f767f81eb0";
  const REDIRECT_URI = "http://localhost:3000/callback";
  const SCOPE = "playlist-modify-private";
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";

  const {
    token,
    setToken,
    isInSearch,
    inputHandle,
    handleSearch,
    tracks,
    setTracks,
    setSelectedTracksUri,
    selectedTracksUri,
    userID,
  } = useSearch();
  const [playlist, setPlaylist] = useState({
    title: "",
    desc: "",
  });

  // useEffect(() => {
  //   if (!isInSearch) {
  //     const selectedTracks = tracks.filter((track) =>
  //       selectedTracksUri.includes(track.uri)
  //     );
  //     setTracks(selectedTracks);
  //   }
  // }, [selectedTracksUri]);

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const handleLogin = () => {
    const url = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
    window.location = url;
  };

  const toggleSelect = (track) => {
    const uri = tracks.find((item) => item.uri === track.uri);
    if (selectedTracksUri.includes(uri)) {
      setSelectedTracksUri(
        selectedTracksUri.filter((item) => item.uri !== track.uri)
      );
    } else {
      setSelectedTracksUri([...selectedTracksUri, uri]);
    }
  };
  const tes = tracks.filter(
    (item) => item.uri !== "spotify:track:2hHeGD57S0BcopfVcmehdl"
  );
  console.log(tes);
  console.log(tracks);
  console.log(selectedTracksUri);

  const renderTracks = () => {
    return tracks
      .filter((item) => item.uri !== selectedTracksUri.uri)
      .map((item) => (
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
  console.log(playlist.desc);
  const handleFormPlaylist = (event) => {
    const { name, value } = event.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  const createPlaylist = async (e) => {
    const data = JSON.stringify({
      name: "input.playlistTitle",
      description: "input.playlistDesc",
      public: false,
      collaborative: false,
    });

    const headerConfig = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      `https://api.spotify.com/v1/users/${userID}/playlists`,
      data,
      headerConfig
    );
    return response.data.id;
  };

  const AddMusicToCreatedPlaylist = async (playListID) => {
    let uris = selectedTracksUri;
    console.log("PlayListID");
    console.log(playListID);
    console.log(uris);
    const data = JSON.stringify({
      uris,
    });

    const headerConfig = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };

    console.log(data);
    const response = await axios.post(
      `https://api.spotify.com/v1/playlists/${playListID}/tracks`,
      data,
      headerConfig
    );
    console.log(response);
  };

  const createAndAddToPlaylist = async (e) => {
    e.preventDefault();
    const playListID = await createPlaylist();
    await AddMusicToCreatedPlaylist(playListID);
    alert("PlayList Created");
  };

  return (
    <div>
      {!token ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}

      {token ? (
        <>
          <Search handleOnChange={inputHandle} handleOnSubmit={handleSearch} />
          <CreatePlaylist
            playlist={playlist}
            handleOnChange={handleFormPlaylist}
            handleOnSubmit={createAndAddToPlaylist}
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
