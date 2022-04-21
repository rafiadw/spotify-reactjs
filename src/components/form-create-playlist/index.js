import "./style.css";
import { Link } from "react-router-dom";

const FormCreatePlaylist = ({ playlist, handleOnChange, handleOnSubmit }) => {
  return (
    <div className="formPlaylist">
      <button className="view-playlist">
        <Link to="/list-playlist">View Playlists</Link>
      </button>
      <form onSubmit={handleOnSubmit}>
        <input
          className="titlePlaylist"
          minLength={10}
          id="title"
          name="title"
          value={playlist.title}
          type="text"
          onChange={handleOnChange}
          placeholder="Playlist Title"
          required
        />
        <br />
        <textarea
          className="descriptionPlaylist"
          id="description"
          name="description"
          value={playlist.description}
          type="text"
          onChange={handleOnChange}
          placeholder="Playlist Description"
          required
        />
        <br />
        <button className="createPlaylist" type="submit">
          Create Playlist
        </button>
      </form>
    </div>
  );
};

export default FormCreatePlaylist;
