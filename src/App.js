import "./App.css";
// import Data from './data/data'
// import Card from './components/cardSong/index';
import Spotify from "./pages/home/index";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/index";
import { useSelector } from "react-redux";

function App() {
  const url = `https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json`;
  fetch(url).then((response) => console.log(response.data));
  const tokenValue = useSelector((state) => state.token.value);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/create-playlist">
              <Spotify />
            </Route>
            <Route path="/">
              <h1>Welcome to our homepage</h1>
              <Link to="/create-playlist">
                <Login />
              </Link>
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
