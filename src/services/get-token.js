const getTokenURL = (hash) => {
  let token = "";
  token = hash
    .substring(1)
    .split("&")
    .find((elem) => elem.startsWith("access_token"))
    .split("=")[1];
  return token;
};

export default getTokenURL;
