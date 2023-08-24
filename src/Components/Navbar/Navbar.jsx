import React from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";

const Navbar = () => {
  return (
    <section class="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1>
              <MdTravelExplore className="icon" />
              &nbsp; Wonderland
            </h1>
          </a>
        </div>
        <div className="navbar">
          <ul className="navlists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
