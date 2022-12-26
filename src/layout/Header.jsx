import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import List from "../components/List";
import { MenuItems } from "./helper";
import logo from "/blogo.png";
import logo2 from "../assets/logo-white.svg";
import "./layout.css";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { Container, Grid, Hidden } from "@mui/material";
const Header = () => {
  const location = useLocation().pathname;
  const [sticky, setSticky] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector(".headTop");
    const scrollTop = window.scrollY;

    if (scrollTop >= 250) {
      header.classList.add("is-sticky");
      setSticky(true);
    } else {
      header.classList.remove("is-sticky");
      setSticky(false);
    }
  };

  let activeStyle = {
    textDecoration: "none",
  };
  const { scrollYProgress } = useScroll();

  const handleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="headTop h-[75px] flex item-center justify-betweern z-50 absolute top-0 w-full">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Container style={{ paddingLeft: 0 }}>
        <div className="w-full flex">
          <header className="headers header-area style-4 style-5 z-50+">
            <div className=" xs:w-[140px] sm:w-[140px] md:w-[150px] lg:w-[160px] xl:w-[170px] xs:ml-4 sm:ml-4 md:ml-0 lg:ml-0  flex items-center h-full">
              <a href="/">
                <img
                  alt="Coppanet"
                  src={location == "/" ? (logo && sticky ? logo : logo) : logo}
                  className="img-logo"
                />
              </a>
            </div>
            <div className={`main-nav ${showNav ? "menu-list-show" : ""}`}>
              <ul className="menu-list">
                <li className="menu-item-has-children">
                  <NavLink
                    to="/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    className="active"
                  >
                    Home
                  </NavLink>
                  <i className="bi bi-chevron-down dropdown-icon"></i>
                </li>
                <li className="menu-item-has-children">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="about"
                  >
                    About
                  </NavLink>
                  <i className="bi bi-chevron-down dropdown-icon"></i>
                </li>
                <li className="menu-item-has-children">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="projects"
                  >
                    Projects
                  </NavLink>
                  <i className="bi bi-chevron-down dropdown-icon"></i>
                </li>
                <li className="menu-item-has-children">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="team"
                  >
                    Our Team
                  </NavLink>
                  <i className="bi bi-chevron-down dropdown-icon"></i>
                </li>
                <li className="menu-item-has-children">
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="job-list"
                  >
                    Career
                  </NavLink>
                  <i className="bi bi-chevron-down dropdown-icon"></i>
                </li>
                {/* <li className="menu-item-has-children">
                <Link to="blog">Blog</Link>
                <i className="bi bi-chevron-down dropdown-icon"></i>
              </li> */}
                <li>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="contact"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </header>
          <Hidden mdUp>
            <div
              onClick={handleNav}
              className=" flex items-center cursor-pointer"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </div>
          </Hidden>
        </div>
      </Container>
    </div>
  );
};

export default Header;
