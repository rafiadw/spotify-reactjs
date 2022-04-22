import { render, fireEvent, screen } from "@testing-library/react";
import Search from "./index";
import "@testing-library/jest-dom/extend-expect";

test("should rendering Search and enter the button", () => {
  const handleSearch = jest.fn((value) => {});

  render(<Search handleOnSubmit={handleSearch} />);

  const searchInput = screen.getByPlaceholderText("Search");

  fireEvent.change(searchInput, { target: { value: "Tulus" } });

  expect(searchInput.value).toBe("Tulus");
});
