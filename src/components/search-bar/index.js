import "./style.css";
//import { FormControl, Button } from "@chakra-ui/react";

const Search = ({ handleOnSubmit, render }) => {
  return (
    <div className="formSearch">
      <form onSubmit={handleOnSubmit}>
        <input
          className="inputSearch"
          id="query"
          type="text"
          placeholder="Search"
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
