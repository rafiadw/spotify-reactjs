import axios from "axios";

const UnfollowPlaylist = async (token, playlistID) => {
  return await axios.delete(
    `https://api.spotify.com/v1/playlists/${playlistID}/followers`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default UnfollowPlaylist;
