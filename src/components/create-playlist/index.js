const CreatePlaylist = ({ playlist, handleOnChange, handleOnSubmit }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="title">Playlist Title :</label>
      <br />
      <input
        id="title"
        value={playlist.name}
        type="text"
        onChange={handleOnChange}
      />
      <br />
      <label htmlFor="title">Playlist Description :</label>
      <br />
      <input
        id="title"
        value={playlist.desc}
        type="text"
        onChange={handleOnChange}
      />
      <br />
      <button type="submit">Create Playlist</button>
    </form>
  );
};

export default CreatePlaylist;
