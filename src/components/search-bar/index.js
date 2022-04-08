import "./style.css";

const Search = ({ handleOnSubmit, handleOnChange }) => {
  return (
    <div className="formSearch">
      <form onSubmit={handleOnSubmit}>
        <input
          className="inputSearch"
          id="gifname"
          type="text"
          onChange={handleOnChange}
          placeholder="Search"
        />
        <button className="buttonSearch" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
