import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const LoginWithNumber = () => {
  return (
    <>
      <div className="login-div">
        <div className="logo">
          <img src="./logo.svg" alt="Cooliewale Logo" />
        </div>
        <div className="title">Porters Login</div>
        <div className="fields">
          <div className="username">
            <IoCallOutline />
            <input
              type="number"
              className="user-input"
              placeholder="Phone number"
            />
          </div>
        </div>
        <button className="signin-button">Send OTP</button>
        <Link to="/login">
          <button className="signin-button">
            <FaArrowLeft />
            Back
          </button>
        </Link>
        <div className="link">
          <a href="/forgot">Forgot password?</a> or{" "}
          <a href="/register">Sign up</a>
        </div>
      </div>
    </>
  );
};

export default LoginWithNumber;
