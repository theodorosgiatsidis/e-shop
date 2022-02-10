import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/store";
import "./navbar.css";

const NavBar = () => {
  const { user, dispatch } = useContext(StoreContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location = "/";
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navLeft">
          <Link to="/">
            <img
              className="navImg"
              src="https://www.nameslook.com/names/gevris-nameslook.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="navCentre">
          <form className="search-bar">
            <input type="search" placeholder="Search" />
            <i className="nav-icon fas fa-search"></i>
          </form>
        </div>
        <div className="navRight">
          <Link className="link" to="/login">
            {!user && <span>LOGIN</span>}
          </Link>
          <Link className="link" to="/register">
            {!user && <span>REGISTER</span>}
          </Link>
          {user && <span>{user.username}</span>}
          <i className="icon fas fa-shopping-cart"></i>
          {user && (
            <span onClick={handleLogout} className="logout">
              LOGOUT
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
