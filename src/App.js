import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Registeration from "./pages/Registeration";
import Home from "./pages/Home";
import Userdetails from "./pages/Userdetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/Registeration" element={<Registeration/>}/>
            <Route path="/userDetails" element={<Userdetails/>}/>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
