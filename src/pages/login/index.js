import login from "../../services/auth-login";

function Login() {
  return <button onClick={() => login()}>Login</button>;
}

export default Login;
