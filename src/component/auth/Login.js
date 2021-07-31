import React, { useState } from "react";
import "./Login.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { auth, provider } from "../../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn =() => {

    auth.signInWithPopup(provider).catch((e) =>alert(e.message));

    
  };

  const handleLogin = (e) =>
   {

    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) => {
      
    } ).catch((e)=>alert(e.message))

    setEmail("")
    setPassword("")

      
  };

  
  const handleRegister = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
        if (auth) {
          
        }
      })
      .catch((e) => alert(e.message));
       
      setEmail("")
      setPassword("")
      
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="logocollez.png"
            alt=""
          />
        </div>
        <div className="login__desc">
          <p>Interrogative knowledge driven space</p>
        </div>
        <div className="login__auth">
          <div className="login__authOptions">
            <div className="login__authOption">
              <img
                className="login__googleAuth"
                src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
                alt=""
              />
              <p onClick ={signIn}>Continue With Google</p>
            </div>
            <div className="login__authDesc">
              
            </div>
          </div>
          <div className="login__emailPass">
            <div className="login__label">
              <h4>Login</h4>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="login__forgButt">
              <small>Forgot Password?</small>
              <button type = "submit" onClick = {handleLogin}>Login</button>
              
            </div>
            <button onClick={handleRegister}>Register</button>
          </div>
        </div>
        <div className="login__lang">
        </div>

      </div>
    </div>
  );
}

export default Login;