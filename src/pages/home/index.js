import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSong from "../../components/card-song/index";
import Search from "../../components/search-bar/index";
import CreatePlaylist from "../../components/create-playlist/index";
import useSearch from "../../hooks/useSearch";
import { useSelector } from "react-redux";

function Spotify() {
  const { tracks, inputHandle, searchHandle, selectedTrack, setSelectedTrack } =
    useSearch();
  const [playlist, setPlaylist] = useState({
    title: "",
    description: "",
  });
  const [userID, setUserID] = useState("");
  const [playlistID, setPlaylistID] = useState("");
  const tokenValue = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    getUserId();
  }, [userID]);

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
        selectedHandle={() =>
          selectedTrack.includes(item.uri)
            ? selectedHandle(item.uri)
            : deselectedHandle(item.uri)
        }
        buttonName={selectedTrack.includes(item.uri) ? "deselect" : "select"}
      />
    ));
  };

  const getUserId = async () => {
    try {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + tokenValue,
          "Content-Type": "application/json",
        },
      });
      console.log("User ID");
      console.log(response.data.id);
      setUserID(response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  const createPlaylist = async () => {
    try {
      const response = await axios.post(
        `https://api.spotify.com/v1/users/${userID}/playlists`,
        {
          name: playlist.title,
          description: playlist.description,
          public: false,
          collaborative: false,
        },
        {
          headers: {
            Authorization: "Bearer " + tokenValue,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Playlist ID");
      console.log(response.data.id);
      setPlaylistID(response.data.id);
      addItemToPlaylist();
    } catch (error) {
      console.log(error);
    }
  };

  const addItemToPlaylist = () => {
    try {
      let uri = selectedTrack;
      const data = {
        uris: selectedTrack,
      };

      const header = {
        headers: {
          Authorization: "Bearer " + tokenValue,
          "Content-Type": "application/json",
        },
      };

      const response = axios.post(
        `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
        data,
        header
      );
      console.log("response add music :", response);
    } catch (error) {
      alert(error);
    }
  };

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();
    if (selectedTrack.length === 0) {
      alert("select track please");
    } else {
      console.log("getUser");
      console.log(userID);
      console.log("create playlist");

      await createPlaylist();
      console.log(playlistID);
      console.log("add song");
    }
  };

  console.log("user id : ", userID);
  console.log("playlist id : ", playlistID);

  return (
    <div>
      <>
        <CreatePlaylist
          playlist={playlist}
          handleOnChange={handleFormPlaylist}
          handleOnSubmit={handleCreatePlaylist}
        />
        {/* {renderPilih()} */}
        <Search handleOnChange={inputHandle} handleOnSubmit={searchHandle} />
        {renderTracks()}
      </>
    </div>
  );
}

export default Spotify;
