const login = () => {
  const CLIENT_ID = process.env.REACT_APP_SPOTIFY_API;
  const REDIRECT_URI = "https://rafiadw-spotify.vercel.app/callback";
  const SCOPE = "playlist-modify-private";
  const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;

  return (window.location.href = AUTH_URL);
};

export default login;
