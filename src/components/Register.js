import { useState } from "react";
import { REGISTER_API } from "./Api";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {

  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.post(REGISTER_API, userDetails);
    } catch (err) {
      console.log(err);
    }
    setUserDetails({
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="user-details">
          <label>First Name:</label>
          <input
            type="text"
            name="first_name"
            value={userDetails.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-details">
          <label>Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={userDetails.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-details">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-details">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userDetails.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-details">
          <label>Password:</label>
          <input
            type="text"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="user-details">
          <label>Confirm Password:</label>
          <input
            type="text"
            name="password2"
            value={userDetails.password2}
            onChange={handleChange}
            required
          />
        </div>
        <div className="create-btn">
          <button>Sign Up</button>
        </div>
        <div className="sign-in">
          <p>Already Have an Account?</p>
          <Link to="/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
