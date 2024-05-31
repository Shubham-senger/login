import React from "react";
import {
  AiOutlineHome,
  AiOutlineMobile,
  AiOutlineIdcard,
  AiOutlineBank,
} from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaArrowLeftLong } from "react-icons/fa6";
import { v4 as uuid } from 'uuid';

import "../assets/css/styles1.css";
import { Link } from "react-router-dom";

const Register2 = () => {
  const coolieId = uuid();

  return (
    <div className="register-div">
      <div className="logo">
        <img src="/logo.svg" alt="Cooliewale Logo" />
      </div>
      <div className="title">Register User</div>
      <div className="fields">
        <div className="coolie-id">
          {/* Hidden field for Coolie ID */}
          <input type="hidden" value={coolieId}/>
        </div>
        <div className="address">
          <AiOutlineHome />
          <input type="text" placeholder="Address" />
        </div>
        <div className="mobile-no">
          <AiOutlineMobile />
          <input type="tel" placeholder="Mobile No" />
        </div>
        <div className="aadhar-card">
          <AiOutlineIdcard />
          <input type="text" placeholder="Aadhar Card Number" />
        </div>
        <div className="account-number">
          <AiOutlineBank />
          <input type="text" placeholder="Account Number" />
        </div>
        <div className="ifsc-code">
          <AiOutlineBank />
          <input type="text" placeholder="IFSC Code" />
        </div>
        <div className="password">
          <RiLockPasswordLine />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <Link to="/">
        <button className="register-button">Register</button>
      </Link>
      <Link to="/register/1">
        <button className="register-button"><FaArrowLeftLong /> Back</button>
      </Link>
      <div className="link">
      Already have an account?<Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register2;
