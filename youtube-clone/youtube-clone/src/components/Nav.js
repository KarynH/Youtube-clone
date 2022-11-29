import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav className="Nav">
      <h1 className="YoutubeHeading">Youtube</h1>
      <Link to="/">
        <h2 className="NavHeadings">Home</h2>
      </Link>
      <Link to="/about">
      <h2 className="NavHeadings">About</h2>
      </Link>
    </nav>
  );
}
