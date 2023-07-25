import { Form, Link } from "@remix-run/react";
import React from "react";
import Login from "./Login";

function Header({ user }) {
  return (
    <header className="header">
      <h1 className="title">Pecha Tools</h1>
      <nav className="nav">
        {user?.picture && (
          <img
            src={user.picture}
            title={user.email}
            className="user-picture"
          ></img>
        )}
        {user ? (
          <Link to={"/logout"} className="logoutButton">
            Logout
          </Link>
        ) : (
          <Login />
        )}
      </nav>
    </header>
  );
}

export default Header;
