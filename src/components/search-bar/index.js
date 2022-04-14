import "./style.css";
import { FormControl, Button } from "@chakra-ui/react";

const Search = ({ handleOnSubmit, handleOnChange }) => {
  return (
    <div className="formSearch">
      <FormControl onSubmit={handleOnSubmit}>
        <input
          className="inputSearch"
          id="gifname"
          type="text"
          onChange={handleOnChange}
          placeholder="Search"
        />
        <Button colorScheme="teal" variant="solid" type="submit">
          Search
        </Button>
      </FormControl>
    </div>
  );
};

export default Search;
