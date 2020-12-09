import React from "react";
import "./nav.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Nav () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/saved">
        SAVED BOOKS
      </a>
      <a className="navbar-brand" href="/">
        SEARCH FOR NEW
        <span className="sr-only">(current)</span>
    </a>
    </nav>
  );
}

export default Nav;
