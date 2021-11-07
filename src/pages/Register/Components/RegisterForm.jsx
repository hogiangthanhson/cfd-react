import React, { useState } from "react";
import { useParams } from "react-router";
import { useForm } from "../../../hooks/useForm";
import courseService from "../../../services/courseService";

export default function RegisterForm() {
  let { slug } = useParams();
  let { register, handleSubmit, error } = useForm();

  const submit = async (form) => {
    let res = await courseService.register(slug, form);
  };
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <div className="text-error">
          <input
            className={error.name && "login-error"}
            {...register("name", { required: true })}
            type="text"
            placeholder="Họ và tên bạn"
          />
          {error.name && <p className="error-text">{error.name}</p>}
        </div>
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <div className="text-error">
          <input
            className={error.phone && "login-error"}
            {...register("phone", { pattern: "phone" })}
            type="text"
            placeholder="Số điện thoại"
          />
          {error.phone && <p className="error-text">{error.phone}</p>}
        </div>
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <div className="text-error">
          <input
            className={error.email && "login-error"}
            {...register("email", { pattern: "email" })}
            type="text"
            placeholder="Email của bạn"
          />
          {error.email && <p className="error-text">{error.email}</p>}
        </div>
      </label>
      <label>
        <p>
          URL Facebook<span>*</span>
        </p>
        <div className="text-error">
          <input
            className={error.fb && "login-error"}
            {...register("fb", { pattern: "url" })}
            type="text"
            placeholder="https://facebook.com"
          />
          {error.fb && <p className="error-text">{error.fb}</p>}
        </div>
      </label>
      <label className="disable">
        <p>Sử dụng COIN</p>
        <div className="checkcontainer">
          Hiện có <strong>300 COIN</strong>
          {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
          {/* Cần ít nhất 200 COIN để giảm giá */}
          <input type="checkbox" defaultChecked="checked" />
          <span className="checkmark" />
        </div>
      </label>
      <label>
        <p>Hình thức thanh toán</p>
        <div className="select">
          <div className="head">Chuyển khoản</div>
          <div className="sub">
            <a href="#">Chuyển khoản</a>
            <a href="#">Thanh toán tiền mặt</a>
          </div>
        </div>
      </label>
      <label>
        <p>Ý kiến cá nhân</p>
        <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." />
      </label>
      <button className="btn main rect" type="submit">
        đăng ký
      </button>
    </form>
  );
}
