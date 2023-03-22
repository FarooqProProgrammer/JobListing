import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg"


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="Navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo w-[50px] h-[50px]">
            Well Found
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeClassName="active"
                className="nav-links text-gray-500"
                onClick={handleClick}
              >
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links text-gray-500"
                onClick={handleClick}
              >
                ForjobSeekers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
 
                className=" text-gray-500"
                onClick={handleClick}
              >
                For Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
  
                className=" text-gray-500"
                onClick={handleClick}
              >
                  <button className="shadow-md px-5 py-2">Log In</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
  
                className=" text-gray-500"
                onClick={handleClick}
              >
                  <button className="shadow-md px-5 py-2 bg-black text-white">Sign up</button>
              </Link>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;