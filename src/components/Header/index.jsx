import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
  let { user, logout, togglePopupLogin } = useAuth();

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
          <img src="/img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">
          {user ? (
            <div className="have-login">
              <div className="account">
                <a href="#" className="info">
                  <div className="name">{user?.name}</div>
                  <div className="avatar">
                    <img src={user?.avatar?.link} alt="" />
                  </div>
                </a>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                <Link to="/thong-tin-ca-nhan/khoa-hoc">Khóa học của tôi</Link>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                >
                  Đăng xuất
                </Link>
              </div>
            </div>
          ) : (
            <div className="not-login bg-none">
              <a
                href="#"
                className="btn-register"
                onClick={(e) => {
                  e.preventDefault();
                  togglePopupLogin(true);
                }}
              >
                Đăng nhập
              </a>
              <a href="login.html" className="btn main btn-open-login">
                Đăng ký
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
