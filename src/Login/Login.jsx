import React from "react";
import "./Login.css";
import Group from "./Group 3608.png";

const Login = () => {
  return (
    <div className="login-page">
      <div className="img">
        <img src={Group} alt="img" />
      </div>
      <div className="logincont">
        <h1>Login</h1>
        <div className="inpcont-1">
          <label>UserName</label>
          <input type="text" required />
        </div>
        <div className="inpcont-1">
          <label>Password</label>
          <input type="text" required />
        </div>
        <div className="inpcont-2">
          <input type="checkbox" className="cb"/>
          <label>Remeber</label>
        </div>
        <div className="inpcont-2">
          <input type="checkbox" className="cb" required/>
          <label>Agree to Terms and Conditions</label>
        </div>

        <a href=" "> Forget Password</a>
        

        <button className="loginbut">
          <p>Login</p>
        </button>
        <a href=" ">Create a New Account</a>

        <a href=" ">Login/Signup with Google</a>
      </div>
    </div>
  );
};

export default Login;