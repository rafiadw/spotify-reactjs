import axios from "axios";

export const getUserId = async (token) => {
  try {
    return await axios.get("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};
