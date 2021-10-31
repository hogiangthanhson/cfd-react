import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import Modal from "../Modal";

export default function LoginModal() {
  let [requestError, setRequestError] = useState("");
  let { register, handleSubmit, error } = useForm();
  let { login, openLogin, togglePopupLogin } = useAuth();

  const submit = async (form) => {
    let res = await login(form);
    if (res) {
      setRequestError(res);
    } else {
      togglePopupLogin(false);
    }
  };
  return (
    <Modal>
      <div
        className="popup-form popup-login"
        style={{ display: openLogin ? "flex" : "none" }}
        onClick={() => togglePopupLogin(false)}
      >
        <div className="wrap" onClick={(e) => e.stopPropagation()}>
          {/* login-form */}
          <form onSubmit={handleSubmit(submit)} className="ct_login" style={{ display: "block" }}>
            <h2 className="title">Đăng nhập</h2>
            {requestError && <p className="error-text">{requestError}</p>}
            <input
              {...register("username", { required: true, pattern: "email" })}
              type="text"
              placeholder="Username"
            />
            {error.username && <p className="error-text">{error.username}</p>}
            <input
              {...register("password", { min: 6, max: 32 })}
              type="password"
              placeholder="Mật khẩu"
            />
            {error.password && <p className="error-text">{error.password}</p>}
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <button type="submit" className="btn rect main btn-login">
              đăng nhập
            </button>
            {/* <div className="text-register" style={{}}>
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" />
                Google
              </div>
            </div>
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div> */}
          </form>
          {/* email form */}
          {/* <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </Modal>
  );
}
