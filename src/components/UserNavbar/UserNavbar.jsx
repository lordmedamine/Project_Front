import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logo.png";
import { logoutUser } from "..//../redux/Actions/UserActions"; // Adjust the path as needed
import "./UserNavBar.scss";

const UserNavbar = () => {
  const [menu, setMenu] = useState("shop");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const handleLoginLogout = () => {
    if (user) {
      dispatch(logoutUser());
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="nav-logo-icon" />
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("Products")}>
          <Link to="/Products">Products</Link>
          {menu === "Products" && <hr />}
        </li>
        <li onClick={() => setMenu("Contact")}>
          <Link to="/Contact">Contact</Link>
          {menu === "Contact" && <hr />}
        </li>
        <li onClick={() => setMenu("Profile")}>
          <Link to="/Profile">Profile</Link>
          {menu === "Profile" && <hr />}
        </li>
      </ul>
      <div className="nav-login-car">
        <Link to="/cart">
          <ShoppingCartIcon />
        </Link>
        <div className="nav-cart-counter"></div>
        <button onClick={handleLoginLogout}>{user ? "Logout" : "Login"}</button>
      </div>
    </div>
  );
};

export default UserNavbar;
