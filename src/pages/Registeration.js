import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registeration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setaddress] = useState("");
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/register", { name,email,password,address });

      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <div>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <div>
          <input
            type="email"
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
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <div>
          <input
            type="text"
            name="address"
            onChange={(e) => setaddress(e.target.value)}
            placeholder="Enter your address"
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

export default Registeration;
