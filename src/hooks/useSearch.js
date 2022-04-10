import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const useSearch = () => {
  const [searchQuery, setSearhcQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState([]);

  const token = useSelector((state) => state.auth.accessToken);

  const inputHandle = (e) => {
    const inputValue = e.target.value;
    setSearhcQuery(inputValue);
  };

  const searchHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: `${searchQuery}`,
          type: "track",
        },
      });

      const data = await response.data.tracks.items;
      const before = tracks.filter((item) => selectedTrack.includes(item.uri));
      const after = data.filter((item) => !selectedTrack.includes(item.uri));
      setTracks([...before, ...after]);
    } catch (error) {
      alert(error);
    }
  };

  return {
    tracks,
    inputHandle,
    searchHandle,
    selectedTrack,
    setSelectedTrack,
  };
};

export default useSearch;
