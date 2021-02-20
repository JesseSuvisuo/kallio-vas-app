import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const navLinks = [
  {
    title: "Etusivu",
    Path: "/",
  },
  {
    title: "Blog",
    Path: "/blog",
  },
  {
    title: "Liity meihin",
    Path: "/contact-us",
  },
  {
    title: "Kirjaudu",
    Path: "/login",
  },
];

function Navigation({ user }) {
  const [menuActive, setMenuActive] = useState(false);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (
      !myRef.current.contains(e.target) &&
      e.target.className !== "ionicons icon ion-ios-menu"
    ) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <nav className="site-navigation">
      <span className="menu-title">Kallion Vasemmisto</span>
      <div
        className={`menu-content-container ${menuActive && "active"}`}
        ref={myRef}
      >
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.Path} onClick={() => setMenuActive(false)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <span className="menu-avatar-container">
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            size={38}
          />
          <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
        </span>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
}

export default Navigation;
