import { useState, useEffect } from "react";
import axios from "axios";

const useSearch = () => {
  const [searchQuery, setSearhcQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [token, setToken] = useState("");
  const [selectedTracksUri, setSelectedTracksUri] = useState([]);
  const [isInSearch, setIsInSearch] = useState(false);
  const [userID, setUserID] = useState("");

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
    const getUserData = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setUserID(response.data.id);
    };
    if (token) {
      getUserData();
    }
  }, []);

  const inputHandle = (e) => {
    const inputValue = e.target.value;
    setSearhcQuery(inputValue);
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
      const searchedTracks = data.filter(
        (track) => track.uri !== selectedTracksUri.uri
      );
      console.log(selectedTracksUri.uri);
      setTracks(searchedTracks);
    } catch (error) {
      alert(error);
    }
  };

  return {
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
  };
};

export default useSearch;
