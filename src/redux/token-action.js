function saveToken(token) {
  return {
    type: "token",
    payload: token,
  };
}

export { saveToken };
