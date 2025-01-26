import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        padding: "0rem 1.25rem",
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Inventory Management</h1>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ marginLeft: "1rem" }}>
            <Link to="/add" style={{ color: "white", textDecoration: "none" }}>
              Add Item
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
