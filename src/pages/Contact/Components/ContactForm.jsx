import React, { useState } from "react";
import { useForm } from "../../../core";
import courseService from "../../../services/courseService";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export default function ContactForm() {
  let { register, handleSubmit, error } = useForm();

  const submit = async (form) => {
    let res = await courseService.contact(form);
  };
  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          className={error.name && "login-error"}
          {...register("name", { required: true })}
          type="text"
          placeholder="Họ và tên bạn"
        />
        {error.name && <p className="error-text">{error.name}</p>}
      </label>
      <label>
        <p>Số điện thoại</p>
        <input
          className={error.phone && "login-error"}
          {...register("phone", { pattern: "phone" })}
          type="text"
          placeholder="Số điện thoại"
        />
        {error.phone && <p className="error-text">{error.phone}</p>}
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input
          className={error.email && "login-error"}
          {...register("email", { pattern: "email" })}
          type="text"
          placeholder="Email của bạn"
        />
        {error.email && <p className="error-text">{error.email}</p>}
      </label>
      <label>
        <p>Website</p>
        <input type="text" placeholder="Đường dẫn website http://" />
      </label>
      <label>
        <p>
          Tiêu đề<span>*</span>
        </p>
        <input type="text" placeholder="Tiêu đề liên hệ" />
      </label>
      <label>
        <p>
          Nội dung<span>*</span>
        </p>
        <textarea cols={30} rows={10} defaultValue={""} />
      </label>
      <button className="btn main rect" type="submit">
        đăng ký
      </button>
    </form>
  );
}
