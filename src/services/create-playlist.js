import axios from "axios";

export const createPlaylist = async (
  playlist,
  token,
  idUser,
  selectedTracks
) => {
  try {
    const response = await axios.post(
      `https://api.spotify.com/v1/users/${idUser}/playlists`,
      {
        name: playlist.title,
        description: playlist.description,
        public: false,
        collaborative: false,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    );
    addItemToPlaylist(token, response.data.id, selectedTracks);
  } catch (error) {
    console.log(error);
  }
};

const addItemToPlaylist = async (token, idPlaylist, selectedTracks) => {
  try {
    const data = {
      uris: selectedTracks,
    };
    const header = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };
    await axios.post(
      `https://api.spotify.com/v1/playlists/${idPlaylist}/tracks`,
      data,
      header
    );
  } catch (error) {
    alert(error);
  }
};
