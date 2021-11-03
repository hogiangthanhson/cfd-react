import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const showMenu = (e) => {
    e.preventDefault()
    document.querySelector("body").classList.toggle("menu-is-show");
  };
  return (
    <nav className="nav">
      <ul>
        <li className="li_login">
          <a href="#">Đăng nhập</a>
          <a href="#">Đăng ký</a>
        </li>
        <li onClick={showMenu}>
          <NavLink to="/" exact>Trang chủ</NavLink>
        </li>
        <li onClick={showMenu}>
          <NavLink to="/team">CFD Team</NavLink>
        </li>
        <li onClick={showMenu}>
          <NavLink to="/khoa-hoc">Khóa Học</NavLink>
        </li>
        <li onClick={showMenu}>
          <NavLink to="/du-an">Dự Án</NavLink>
        </li>
        <li onClick={showMenu}>
          <NavLink to="/hop-tac">Liên hệ</NavLink>
        </li>
      </ul>
    </nav>
  );
}
