import {Link, useRouteMatch} from "react-router-dom"

export function Header() {
  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger">
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to="/" exact className="logo">
          <img src="img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          <div className="have-login">
            <div className="account">
              <a href="#" className="info">
                <div className="name">Trần Lê Trọng Nghĩa</div>
                <div className="avatar">
                  <img src="img/avt.png" alt="" />
                </div>
              </a>
            </div>
            <div className="hamberger"></div>
            <div className="sub">
              <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
              <Link to="/thong-tin-ca-nhan/khoa-hoc">Khóa học của tôi</Link>
              <Link to="/thong-tin-ca-nhan/dang-xuat">Đăng xuất</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
