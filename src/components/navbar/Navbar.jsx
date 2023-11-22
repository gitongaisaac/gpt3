import React from "react";
import { RiMenuLine, RiCloseLin } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="gpt3__navbar">
        <div className="gtp3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgpt3">What is GPT</a>
            </p>
            <p>
              <a href="#possibilities">Open AI</a>
            </p>
            <p>
              <a href="#features">Case Studies</a>
            </p>
            <p>
              <a href="#blog">Library</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
