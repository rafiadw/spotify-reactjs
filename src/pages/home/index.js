import { useEffect, useState } from "react";
import CardSong from "../../components/card-song/index";
import Search from "../../components/search-bar/index";
import FormCreatePlaylist from "../../components/form-create-playlist/index";
import { useSelector, useDispatch } from "react-redux";
import GetTracks from "../../services/search-track";
import { createPlaylist } from "../../services/create-playlist";
import { getUserId } from "../../services/get-user-id";
import { logout, profile } from "../../redux/auth-slicer";

function Spotify() {
  const initialState = {
    title: "",
    description: "",
  };
  const { tokenValue, profile } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [playlist, setPlaylist] = useState(initialState);
  const [userID, setUserID] = useState({});
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState([]);

  useEffect(() => {
    getUserId(tokenValue)
      .then((res) => res.data)
      .then((data) => dispatch(profile(data)));
    console.log(profile);
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
    GetTracks(tokenValue, query).then((data) => setTracks(data));
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
