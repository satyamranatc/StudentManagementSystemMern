// Login.js
import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = ({ SetLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, for now, let's just log the data
    console.log(formData);

    async function sendLoginCredentials() {
      let Res = await axios.post("/api/login", formData);

      if (Res.data.Success) 
      {
        SetLoginSuccess(true);
      } 
      else 
      {
        alert("Wrond Credentials");
      }

    }
    sendLoginCredentials();
  };


  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
