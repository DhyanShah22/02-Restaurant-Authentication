import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Styles/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState(null);
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
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
      .post("http://localhost:8000/api/user/login", formData)
      .then((response) => {
        console.log(response);
        const token = response.data.token;  // get the token
        const userEmail = response.data.Email;
        const userRole = response.data.role; // assuming role is returned in the response

        if (userRole === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/customer-dashboard");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setErrMsg("Invalid Credentials");
        setTimeout(() => {
          setErrMsg(null);
        }, 3000);
      });

    console.log("Form submitted:", formData);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
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
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="button btn-primary">
            Login
          </button>
        </form>
        {errMsg && <p className="error-message">{errMsg}</p>}
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
