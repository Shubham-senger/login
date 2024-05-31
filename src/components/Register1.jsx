import React from "react";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineIdcard,
} from "react-icons/ai";
import { FaGenderless } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { v4 as uuid } from 'uuid';

import "../assets/css/styles1.css";
import { Link } from "react-router-dom";

const Register1 = () => {
  const coolieId = uuid();

  return (
    <div className="register-div">
      <div className="logo">
        <img src="/logo.svg" alt="Cooliewale Logo" />
      </div>
      <div className="title">Register User</div>
      <div className="fields">
        <div className="coolie-id" >
          {/* Hidden field for Coolie ID */}
          <input type="hidden" value={coolieId}/>
        </div>
        <div className="first-name">
          <AiOutlineUser />
          <input type="text" placeholder="First Name" />
        </div>
        <div className="last-name">
          <AiOutlineUser />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="badge-id">
          <AiOutlineIdcard />
          <input type="text" placeholder="Badge ID" />
        </div>
        <div className="age">
          <AiOutlineCalendar />
          <input type="number" placeholder="Age" />
        </div>
        <div className="gender">
          <FaGenderless />
          <input type="text" placeholder="Gender" />
        </div>
      </div>
      <Link to="/register/2">
        <button className="register-button">
          Next <FaArrowRightLong />
        </button>
      </Link>
      <div className="link">
      Already have an account?<Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register1;
