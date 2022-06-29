import { useRef, useState } from "react";

const Register = () => {
  // const useRef = useRef();
  // const errRef = useRef();

  const [userDetails, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    //N working url yet
  }
  return (
    <div>
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="user-details">
          <label>First Name:</label>
          <input
            type="text"
            name="fname"
            value={userDetails.fname}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="user-details">
          <label>Last Name:</label>
          <input
            type="text"
            name="lname"
            value={userDetails.lname}
            onChange={handleChange}
            autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
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
            autoComplete="off"
            required
          />
        </div>
        <div className="user-details">
          <label>Confirm Password:</label>
          <input
            type="text"
            name="confirmPassword"
            value={userDetails.confirmPassword}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="create-btn">
          <button>Sign Up</button>
        </div>
        <div className="sign-in">
          <p>Already Have an Account?</p>
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
