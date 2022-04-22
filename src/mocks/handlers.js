import { rest } from "msw";

const user = [
  rest.get("https://api.spotify.com/v1/me", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        display_name: "Rafiadw",
        external_urls: {
          spotify: "https://open.spotify.com/user/gw1sunvd6lytrzi6l3k0zljmc",
        },
        followers: {
          href: null,
          total: 0,
        },
        href: "https://api.spotify.com/v1/users/gw1sunvd6lytrzi6l3k0zljmc",
        id: "gw1sunvd6lytrzi6l3k0zljmc",
        images: [],
        type: "user",
        uri: "spotify:user:gw1sunvd6lytrzi6l3k0zljmc",
      })
    );
  }),
];

const tracks = [
  rest.get("https://api.spotify.com/v1/search", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [
          {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/2iDVt6mFbtbDEZG5ax0dTi",
                  },
                  href: "https://api.spotify.com/v1/artists/2iDVt6mFbtbDEZG5ax0dTi",
                  id: "2iDVt6mFbtbDEZG5ax0dTi",
                  name: "Tulus",
                  type: "artist",
                  uri: "spotify:artist:2iDVt6mFbtbDEZG5ax0dTi",
                },
              ],
              external_urls: {
                spotify:
                  "https://open.spotify.com/album/4r5WcDCABdLANoITiPkz3s",
              },
              href: "https://api.spotify.com/v1/albums/4r5WcDCABdLANoITiPkz3s",
              id: "4r5WcDCABdLANoITiPkz3s",
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ab67616d0000b27385aceff2e4af8cfb606f4fbe",
                  width: 640,
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/ab67616d00001e0285aceff2e4af8cfb606f4fbe",
                  width: 300,
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/ab67616d0000485185aceff2e4af8cfb606f4fbe",
                  width: 64,
                },
              ],
              name: "Langsung Dari Konser Monokrom Jakarta (Live)",
              release_date: "2019-04-05",
              release_date_precision: "day",
              total_tracks: 21,
              type: "album",
              uri: "spotify:album:4r5WcDCABdLANoITiPkz3s",
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2iDVt6mFbtbDEZG5ax0dTi",
                },
                href: "https://api.spotify.com/v1/artists/2iDVt6mFbtbDEZG5ax0dTi",
                id: "2iDVt6mFbtbDEZG5ax0dTi",
                name: "Tulus",
                type: "artist",
                uri: "spotify:artist:2iDVt6mFbtbDEZG5ax0dTi",
              },
            ],
            disc_number: 1,
            duration_ms: 212069,
            explicit: false,
            external_ids: {
              isrc: "FR2X41917040",
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/5H2RIq9BmVHWqoPIhR385G",
            },
            href: "https://api.spotify.com/v1/tracks/5H2RIq9BmVHWqoPIhR385G",
            id: "5H2RIq9BmVHWqoPIhR385G",
            is_local: false,
            is_playable: true,
            name: "Pembuka - Live",
            popularity: 39,
            preview_url:
              "https://p.scdn.co/mp3-preview/53ddea349cd5e9e23bd0547f4ef03f98c607c6e7?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 1,
            type: "track",
            uri: "spotify:track:5H2RIq9BmVHWqoPIhR385G",
          },
          {
            album: {
              album_type: "compilation",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
                  },
                  href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                  id: "0LyfQWJT6nXafLPZqxe9Of",
                  name: "Various Artists",
                  type: "artist",
                  uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
                },
              ],
              external_urls: {
                spotify:
                  "https://open.spotify.com/album/38D2z2TJ00G6qViXbvslpy",
              },
              href: "https://api.spotify.com/v1/albums/38D2z2TJ00G6qViXbvslpy",
              id: "38D2z2TJ00G6qViXbvslpy",
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/ab67616d0000b27348844ecf33d93b1022f69310",
                  width: 640,
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/ab67616d00001e0248844ecf33d93b1022f69310",
                  width: 300,
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/ab67616d0000485148844ecf33d93b1022f69310",
                  width: 64,
                },
              ],
              name: "Pongki Barata Meets The Stars",
              release_date: "2014-09-20",
              release_date_precision: "day",
              total_tracks: 10,
              type: "album",
              uri: "spotify:album:38D2z2TJ00G6qViXbvslpy",
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/2iDVt6mFbtbDEZG5ax0dTi",
                },
                href: "https://api.spotify.com/v1/artists/2iDVt6mFbtbDEZG5ax0dTi",
                id: "2iDVt6mFbtbDEZG5ax0dTi",
                name: "Tulus",
                type: "artist",
                uri: "spotify:artist:2iDVt6mFbtbDEZG5ax0dTi",
              },
            ],
            disc_number: 1,
            duration_ms: 232226,
            explicit: false,
            external_ids: {
              isrc: "FRX281937423",
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/2x9UGhofPBZdeam4uZCUID",
            },
            href: "https://api.spotify.com/v1/tracks/2x9UGhofPBZdeam4uZCUID",
            id: "2x9UGhofPBZdeam4uZCUID",
            is_local: false,
            is_playable: true,
            name: "1000 Tahun Lamanya",
            popularity: 67,
            preview_url:
              "https://p.scdn.co/mp3-preview/8b48062dbd1912fa9624bc258a8b61b76e10e862?cid=774b29d4f13844c495f206cafdad9c86",
            track_number: 1,
            type: "track",
            uri: "spotify:track:2x9UGhofPBZdeam4uZCUID",
          },
        ],
      })
    );
  }),
];

export { user, tracks };
