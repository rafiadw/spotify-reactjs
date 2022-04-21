import Spotify from "./pages/home/index";
import Login from "./pages/login/index";
import NotFound from "./pages/not-found";
import ListPlaylist from "./pages/playlistt/index";
import getTokenURL from "./services/get-token";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./redux/auth-slicer";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin && window.location.hash) {
      dispatch(login(getTokenURL(window.location.hash)));
    }
  }, [isLogin]);

  return (
    <Router>
      <Switch>
        <Route path="/create-playlist">
          {isLogin ? <Spotify /> : <Redirect to="/" />}
        </Route>
        <Route path="/list-playlist">
          {isLogin ? <ListPlaylist /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          {isLogin ? <Redirect to="/create-playlist" /> : <Login />}
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
