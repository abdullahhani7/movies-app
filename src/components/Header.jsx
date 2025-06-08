import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div>
          <a href="#">Logo</a>
        </div>
        <ul>
          <li className="nav-links">
            <a href="#">Watch List</a>
          </li>
          <li>
            <a href="#">Watched</a>
          </li>
          <li>
            <a href="#" className="btn">Add</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
