import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslate } from "../../core";
import { useAuth } from "../../hooks/useAuth";
import { logoutAction, openLoginAction } from "../../store/action/authAction";

export function Header() {
  let { user } = useAuth();
  let dispatch = useDispatch();

  const { selectLang } = useTranslate();

  const changeLang = (e) => {
    let value = e.currentTarget.value;
    selectLang(value);
  };
  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger" >
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
          <select name="" id="" onChange={changeLang}>
            <option value="en">English</option>
            <option value="vi">Tieng Viet</option>
          </select>
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
                    dispatch(logoutAction());
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
                  dispatch(openLoginAction());
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
