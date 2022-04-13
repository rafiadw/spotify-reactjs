import login from "../../services/auth-login";
import style from "./style.module.css";

function Login() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h1>Hello, there!</h1>
        <p>Please, login. Before you using this web application</p>
      </div>
      <div className={style.button}>
        <button onClick={() => login()}>Login</button>
      </div>
    </div>
  );
}

export default Login;
