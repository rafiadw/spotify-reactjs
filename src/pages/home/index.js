import { useEffect, useState } from "react";
import CardSong from "../../components/card-song/index";
import Search from "../../components/search-bar/index";
import FormCreatePlaylist from "../../components/form-create-playlist/index";
import { useSelector, useDispatch } from "react-redux";
import GetTracks from "../../services/search-track";
import { createPlaylist } from "../../services/create-playlist";
import { getUserId } from "../../services/get-current-user";
import Welcome from "../../components/welcome/index";
import { logout, setProfile } from "../../redux/auth-slicer";
import { setSelectedTrack, setTracks } from "../../redux/track-slice";
//import data from "../../data/data";

function Spotify() {
  const initialState = {
    title: "",
    description: "",
  };
  const tokenValue = useSelector((state) => state.auth.accessToken);
  const user = useSelector((state) => state.auth.profile);
  let selectedTrack = useSelector((state) => state.track.selected);
  let tracks = useSelector((state) => state.track.tracks);
  const [playlist, setPlaylist] = useState(initialState);
  //const [tempTracks, setTempTracks] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserId(tokenValue).then((res) => dispatch(setProfile(res.data)));
  }, []);

  const selectedHandle = (uri) => {
    if (selectedTrack.includes(uri)) {
      dispatch(setSelectedTrack(selectedTrack.filter((item) => item !== uri)));
    } else {
      dispatch(setSelectedTrack([...selectedTrack, uri]));
    }
  };

  const handleFormPlaylist = (event) => {
    const { name, value } = event.target;
    setPlaylist({ ...playlist, [name]: value });
  };

  async function searchHandle(e) {
    e.preventDefault();
    const query = e.target.query.value;
    GetTracks(tokenValue, query)
      .then((res) => res.data.tracks.items)
      .then((data) => dispatch(setTracks(data)));
  }

  function msToMinutenSecond(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  const renderTracks = () => {
    return tracks.map((item) => (
      <CardSong
        image={item.album.images[0].url}
        album={item.album.name}
        artist={item.album.artists[0]?.name}
        title={item.name}
        duration={msToMinutenSecond(item.duration_ms)}
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
      await createPlaylist(playlist, tokenValue, user.id, selectedTrack);
      dispatch(setSelectedTrack([]));
      alert("create playlist success");
      setPlaylist(initialState);
    }
  }

  return (
    <div>
      <>
        <Welcome name={user.display_name} logout={() => dispatch(logout())} />
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
