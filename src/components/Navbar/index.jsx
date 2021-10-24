import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

export function Navbar() {
  return (
    <nav class="nav">
      <ul>
        <li class="active">
          <NavLink exact to="/">
            Trang chủ
          </NavLink>
        </li>
        <li>
          <NavLink to="/team">CFD Team</NavLink>
        </li>
        <li>
          <NavLink to="/khoa-hoc">Khóa Học</NavLink>
        </li>
        <li>
          <NavLink to="/du-an">Dự Án</NavLink>
        </li>
        <li>
          <NavLink to="/hop-tac">Liên hệ</NavLink>
        </li>
        <li class="li_login">
          <NavLink to="/dang-nhap">Đăng nhập</NavLink>
          <NavLink to="/dang-ky">Đăng ký</NavLink>
        </li>
      </ul>
    </nav>
  );
}
