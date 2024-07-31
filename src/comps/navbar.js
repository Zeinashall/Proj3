import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "../app/globals.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
    var menu = document.querySelector(".navbar ul.menu");
    menu.classList.toggle("active");
  };
  return (
    <nav>
      <div class="nav-container">
        <div class="container">
          <div class="navbar">
            <a href="#" class="logo">
              <img src="icon12.png" width="35px" alt="Logo" />
              <span class="logo-primary">N</span>issan
              <span class="logo-primary">V</span>ehicles
            </a>
            <div class="mobile-menu">
              <div class="burger-menu menu-toggle" onClick={toggleMenu}>
                <i class="fas fa-bars"></i>
              </div>
              <ul class="menu">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#details">Details</a>
                </li>
                <li>
                  <a href="#login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
