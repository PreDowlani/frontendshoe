import React from "react";
import { NavLink } from "react-router-dom";
import emoji from "../images/emoji.png";
import("boxicons");

const Navbar = ({ size, loggedin }) => {
  return (
    <div className="nav">
      <NavLink to={"/"}>
        <div className="img01">
          <img src={emoji} alt="imagen-online" width="80" />
          <NavLink to={"/"}></NavLink>
        </div>
      </NavLink>
      <ul>
        <li className="links">
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to={"/products"}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to={"/contact"}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
      <div className="cart">
        <NavLink to={"/carrito"}>
          <box-icon name="cart"></box-icon>
          <span className="total-items">{size}</span>
        </NavLink>
      </div>
      <div>
        <li className={!loggedin ? "activo" : "desaparece"}>
          <NavLink
            className={({ isActive }) => (isActive ? "activo" : "noactivo")}
            to={"/login"}
          >
            LogIn
          </NavLink>
        </li>
        <li className={loggedin ? "activo" : "desaparece"}>
          <NavLink
            className={({ isActive }) => (isActive ? "noactivo" : "activo")}
            to={"/logout"}
          >
            LogOut
          </NavLink>
        </li>
        <li className="signup">
          <NavLink to={"/singup"}>Singup</NavLink>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
