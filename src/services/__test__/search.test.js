import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import GetTracks from "../search-track";
import { response } from "./response-search";
import data from "../../data/data";

const server = setupServer(
  rest.get("https://api.spotify.com/v1/search", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(req.body));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should displays track from api call", async () => {
  const search = await GetTracks("tulus");
});
