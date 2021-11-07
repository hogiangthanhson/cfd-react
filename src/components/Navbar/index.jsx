import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li className="li_login">
          <a href="#">Đăng nhập</a>
          <a href="#">Đăng ký</a>
        </li>
        <li>
          <Link to="/" exact>Trang chủ</Link>
        </li>
        <li>
          <Link to="/team">CFD Team</Link>
        </li>
        <li>
          <Link to="/khoa-hoc">Khóa Học</Link>
        </li>
        <li>
          <Link to="/du-an">Dự Án</Link>
        </li>
        <li>
          <Link to="/hop-tac">Liên hệ</Link>
        </li>
      </ul>
    </nav>
  );
}
