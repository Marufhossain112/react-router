import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-center space-x-2">
      <div>
        <a href="/home">Home</a>
      </div>
      <div>
        <Link to="/home2">Home2</Link>
      </div>
      <div>
        <a href="/about">About</a>
      </div>
      <div>
        <Link to="/about2">About2</Link>
      </div>
    </div>
  );
};

export default Header;
