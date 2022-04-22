import { render, screen, waitFor } from "@testing-library/react";
import { render, fireEvent } from "@testing-library/react";
import { Search } from "./index";

test("should rendering and submiting search form", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "23" } });
  expect(input.value).toBe("$23");
});
