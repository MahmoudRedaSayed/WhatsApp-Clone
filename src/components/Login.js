import "./Login.css";
import { Button } from "@material-ui/core";
import {auth,provider} from "../firebase"

export default function Login() {
  const login=()=>{
    auth.signInWithRedirect(provider);
    console.log("clicked");
  }
  return <div className="app" >
    <div className="login">
      <div className="login__container">
        <img src="login-logo.png" alt="logo"></img>
        <div className="login__text">
          <h1> sign in to Whatsapp </h1>
        </div>
        <Button onClick={login}>sign in with google </Button>
      </div>
    </div>
  </div>;
}
