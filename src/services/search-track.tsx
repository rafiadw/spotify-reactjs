import axios from "axios";

const  GetTracks = async (token : string, query : string) => {
        return await axios.get("https://api.spotify.com/v1/search?limit=1", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            q: `${query}`,
            type: "track",
          },
        });
}

export default GetTracks;