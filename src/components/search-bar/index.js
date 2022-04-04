const Search = ({ handleOnSubmit, handleOnChange }) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <input id="gifname" type="text" onChange={handleOnChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
