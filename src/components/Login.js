import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_API } from "./Api";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(LOGIN_API, userLogin);
    } catch (err) {
      console.log(err);
    }
    setUserLogin({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login-ctn">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-input">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userLogin.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-input">
          <label>Password:</label>
          <input
            type="text"
            name="password"
            value={userLogin.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-btn">
          <button>Sign in</button>
        </div>
        <div className="signup-link">
          <p>Don't Have an Account?</p>
          <Link to="/register">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
