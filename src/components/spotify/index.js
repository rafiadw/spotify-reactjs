import axios from "axios";
import React from "react";
import CardSong from "../cardSong/index"

class Spotify extends React.Component{
    BASE_URL = "https://api.spotify.com/v1";
    CLIENT_ID = "8f9fc624420548318eaed2f767f81eb0";
    REDIRECT_URI = "http://localhost:3000/callback";
    SCOPE = "playlist-modify-private";
    SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
    RESPONSE_TYPE = "token"
    
    state = {
        token: '',
        searchQuery: '',
        tracks: []
    };

    getParamsSpotfyAuth = (hash) => {
        const stringAfterHashtag = hash.substring(1);
        const paramsInUrl = stringAfterHashtag.split("&");
        const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        console.log(currentValue);
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
        }, {});
    return paramsSplitUp;
    }
    
    componentDidMount() {
        if (window.location.hash) {
            const { access_token, expires_in, token_type } =
            this.getParamsSpotfyAuth(window.location.hash);
            console.log(access_token)
            this.setState({token: access_token})
          }
      }

    handleLogout = () => {
        this.setState({token: ''})
    }

    inputHandle = (e) => {
        const inputValue = e.target.value;
        this.setState({searchQuery: inputValue})
    }

    searchTracks = async (event) => {
        axios
        .get("https://api.spotify.com/v1/search", {
          headers: {
            Authorization: `Bearer ${this.state.token}`,
          },
          params: {
            q: `${this.state.searchQuery}`,
            type: "track",
          },
        })
        .then((response) => {
          const data = response.data.tracks.items;
          console.log(data);
          this.setState({
            tracks: data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
      event.preventDefault();
    }

    handleLogin = () => {
        const url = `${this.SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${this.CLIENT_ID}&redirect_uri=${this.REDIRECT_URI}&scope=${this.SCOPE}&response_type=token&show_dialog=true`;
        window.location = url;
    }

    render(){
        const {token, searchQuery, tracks} = this.state;
        console.log(searchQuery);
        return(
            <div>
               {!token ?
                    <button onClick={this.handleLogin}>Login</button>
                    : <button onClick={this.handleLogout}>Logout</button>}

                {token ?
                    <form onSubmit={this.searchTracks}>
                        <input type="text" onChange={this.inputHandle}/>
                        <button type="submit">Search</button>
                    </form>

                    : <h2>{tracks}</h2>
                }

                {tracks.map((item) => (
                     <CardSong image={item.album.images[0].url} album={item.name} artist={item.album.artists[0]?.name} title={item.album.name} key={item.name}/>
                ) 
                )}
            </div>
        )
    }

}

export default Spotify;