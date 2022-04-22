import "./style.css";
//import { FormControl, Button } from "@chakra-ui/react";

const Search = ({ handleOnSubmit, render }) => {
  return (
    <div className="search-wrapper">
      <form onSubmit={handleOnSubmit}>
        <input
          className="inputSearch"
          id="query"
          name="query"
          type="text"
          placeholder="Search"
          required
        />
        <button className="buttonSearch" type="submit">
          Search
        </button>
      </form>
      {render}
    </div>
  );
};

export default Search;
