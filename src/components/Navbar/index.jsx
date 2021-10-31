import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const showMenu = (e) => {
    document.querySelector("body").classList.toggle("menu-is-show");
  };
  return (
    <nav class="nav">
      <ul>
        <li class="li_login">
          <a href="#">Đăng nhập</a>
          <a href="#">Đăng ký</a>
        </li>
        <li onClick={showMenu}>
          <NavLink exact to="/">Trang chủ</NavLink>
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
