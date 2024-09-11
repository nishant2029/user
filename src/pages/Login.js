import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      const user = response.data;
      localStorage.setItem("token", response.data.token);
      alert("Login successful");
      navigate("/userDetails", { state: { user } });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Login;
