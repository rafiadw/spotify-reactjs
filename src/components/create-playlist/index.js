import "./style.css";

const CreatePlaylist = ({ playlist, handleOnChange, handleOnSubmit }) => {
  return (
    <form onSubmit={handleOnSubmit} className="formPlaylist">
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
  );
};

export default CreatePlaylist;
