import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
  return (
    <div className="header">
      <Link to="/">
        <img id="logo" src="https://github.com/nateychau/jw_photos/blob/main/frontend/src/assets/images/space.jpg"></img>
        <h2>Zahra Essa Photos</h2>
      </Link>
      {isMobile ? null : (
        <Link to="/about">
          <h4>About</h4>
        </Link>
      )}
    </div>
  );
};
