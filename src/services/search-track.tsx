import axios from "axios";

const  GetTracks = async (token : string, query : string) => {
   
        return await axios.get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            q: `${query}`,
            type: "track",
          },
        });

        // const before = tracks.filter((item) => selectedTrack.includes(item.uri));
        // const after = data.filter((item) => !selectedTrack.includes(item.uri));
        // return([...before, ...after]);
     
}

export default GetTracks;