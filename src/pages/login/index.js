import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login, userStore } from "../../redux/token-slicer";
import React, { useEffect, useState } from "react";

const Login = () => {
  //   const CLIENT_ID = "8f9fc624420548318eaed2f767f81eb0";
  //   const REDIRECT_URI = "http://localhost:3000/callback";
  //   const SCOPE = "playlist-modify-private";
  //   const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  //   const AUTH_URL = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&response_type=token&show_dialog=true`;
  //   let access_token = new URLSearchParams(window.location.hash).get(
  //     "#access_token"
  //   );

  //   const tokenValue = useSelector((state) => state.token.value);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     if (!tokenValue) {
  //       window.location.hash = " ";
  //       dispatch(login(access_token));
  //     }
  //     getUserId();
  //   });

  //   const getUserId = async () => {
  //     try {
  //       const response = await axios.get("https://api.spotify.com/v1/me", {
  //         headers: {
  //           Authorization: "Bearer " + tokenValue,
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       console.log("User ID");
  //       console.log(response.data.id);
  //       dispatch(userStore(response.data.id));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div>
      <button>{/* <a href={AUTH_URL}>login</a> */}Halo</button>
    </div>
  );
};

export default Login;
