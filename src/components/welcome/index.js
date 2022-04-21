import "./style.css";

const Welcome = ({ name, logout }) => {
  return (
    <div className="container">
      <h1>
        Welcome <b>{name}</b>, if you don't wanna make playlist.
      </h1>
      <h1>
        please,{" "}
        <button className="button-logout" onClick={logout}>
          log out
        </button>
      </h1>
    </div>
  );
};

export default Welcome;
