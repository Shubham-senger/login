import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginWithNumber from "./pages/loginwithno";
import Home from "./pages/Home";
import Login from "./pages/login";
import './assets/css/index.css';
import Register1 from "./pages/register1";
import Register2 from "./pages/register2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/register/1" element={<Register1/>}></Route>
        <Route path="/register/2" element={<Register2/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/loginwithnumber" element={<LoginWithNumber/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
