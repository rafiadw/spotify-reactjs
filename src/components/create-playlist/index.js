const CreatePlaylist = ({ playlist, handleOnChange, handleOnSubmit }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input
        minLength={10}
        id="title"
        name="title"
        value={playlist.title}
        type="text"
        onChange={handleOnChange}
        placeholder="Playlist Title"
      />
      <br />
      <textarea
        id="decs"
        name="decs"
        value={playlist.desc}
        type="text"
        onChange={handleOnChange}
        placeholder="Playlist Description"
      />
      <br />
      <button type="submit">Create Playlist</button>
    </form>
  );
};

export default CreatePlaylist;
