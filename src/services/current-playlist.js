import axios from "axios";

const CurrentPlaylist = async (token) => {
  return await axios.get("https://api.spotify.com/v1/me/playlists", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default CurrentPlaylist;
