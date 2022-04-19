import { render, screen } from "@testing-library/react";
import CardSong from ".";
import data from "../../data/data";

test("should track card display title song, artist, album, button", () => {
  render(
    <CardSong
      image={data[0].album.images[0].url}
      album={data[0].album.name}
      artist={data[0].album.artists[0]?.name}
      title={data[0].name}
      buttonName="select"
    />
  );
  const button = screen.getByText(/select/i);
  const card = screen.getByTestId("card-song");

  expect(button).toBeInTheDocument();
  expect(card).toBeInTheDocument();
});
