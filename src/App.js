import "./App.css";
import Spotify from "./pages/home/index";
import Login from "./pages/login/index";
import NotFound from "./pages/not-found";
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
  const isLogin = useSelector((state) => state.auth.isLogin);
  const token = useSelector((state) => state.auth.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLogin && window.location.hash) {
      dispatch(login(getTokenURL(window.location.hash)));
    }
    console.log(isLogin);
    console.log("token value:", token);
  }, [isLogin]);

  return (
    <Router>
      <Switch>
        <Route path="/create-playlist">
          {isLogin ? <Spotify /> : <Redirect to="/" />}
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
