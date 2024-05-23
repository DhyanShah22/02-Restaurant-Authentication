import React, { useState } from "react";
import axios from "axios";
import "./Styles/Signup.css";

const Signup = () => {
  const [successMsg, setSuccessMsg] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
    Role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user/signup", formData)
      .then((response) => {
        console.log(response);
        setSuccessMsg("Successfully Signed Up!");
        setTimeout(() => {
          setSuccessMsg(null);
        }, 3000);
      })
      .catch((error) => {
        setErrMsg(error.response.data.error);
        setTimeout(() => {
          setErrMsg(null);
        }, 3000);
        console.error("Signup error:", error);
      });

    console.log("Form submitted:", formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password:</label>
            <input
              type="password"
              id="Password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="roles">Role:</label>
            <div className="radio-buttons">
              <label>
                <input
                  type="radio"
                  name="Role"
                  value="customer"
                  checked={formData.Role === "customer"}
                  onChange={handleChange}
                />
                Customer
              </label>
              <label>
                <input
                  type="radio"
                  name="Role"
                  value="admin"
                  checked={formData.Role === "admin"}
                  onChange={handleChange}
                />
                Admin
              </label>
            </div>
          </div>
          <button type="submit" className="button btn-primary">
            Sign Up
          </button>
        </form>
        {successMsg && <div className="success-message">{successMsg}</div>}
        {errMsg && <div className="error-message">{errMsg}</div>}
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
