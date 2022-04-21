import { useEffect, useState } from "react";
import CardSong from "../../components/card-song/index";
import Search from "../../components/search-bar/index";
import FormCreatePlaylist from "../../components/form-create-playlist/index";
import { useSelector, useDispatch } from "react-redux";
import GetTracks from "../../services/search-track";
import { createPlaylist } from "../../services/create-playlist";
import { getUserId } from "../../services/get-user-id";
import Welcome from "../../components/welcome/index";
import { logout } from "../../redux/auth-slicer";

function Spotify() {
  const initialState = {
    title: "",
    description: "",
  };
  const tokenValue = useSelector((state) => state.auth.accessToken);
  const [playlist, setPlaylist] = useState(initialState);
  const [userID, setUserID] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserId(tokenValue).then((res) => setUserID(res.data));
    console.log(userID);
  }, []);

  const selectedHandle = (uri) => {
    if (selectedTrack.includes(uri)) {
      setSelectedTrack((item) => item.filter((id) => id !== uri));
    } else {
      setSelectedTrack((item) => [...item, uri]);
    }
  };

  const handleFormPlaylist = (event) => {
    const { name, value } = event.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  async function searchHandle(e) {
    e.preventDefault();
    const query = e.target.query.value;
    GetTracks(tokenValue, query).then((res) =>
      setTracks(res.data.tracks.items)
    );
  }

  const renderTracks = () => {
    return tracks.map((item) => (
      <CardSong
        image={item.album.images[0].url}
        album={item.album.name}
        artist={item.album.artists[0]?.name}
        title={item.name}
        key={item.id}
        selectedHandle={() => selectedHandle(item.uri)}
        buttonName={selectedTrack.includes(item.uri) ? "deselect" : "select"}
      />
    ));
  };

  async function handleCreatePlaylist(e) {
    e.preventDefault();
    if (selectedTrack.length === 0) {
      alert("select track please");
    } else {
      await createPlaylist(playlist, tokenValue, userID, selectedTrack);
      alert("create playlist success");
    }
    setPlaylist(initialState);
  }

  return (
    <div>
      <>
        <Welcome name={userID.display_name} logout={() => dispatch(logout())} />
        <FormCreatePlaylist
          playlist={playlist}
          handleOnChange={handleFormPlaylist}
          handleOnSubmit={handleCreatePlaylist}
        />
        <Search handleOnSubmit={searchHandle} />
        {renderTracks()}
      </>
    </div>
  );
}

export default Spotify;
