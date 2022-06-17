import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../navbar.css";

function Navbar() {
  const [state, handlestate] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handlestate(true);
      } else {
        handlestate(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`navbar ${state && "navbar_black"}`}>
      <div className="navbar_logo">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar_avatar">
        <Link to="/profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
