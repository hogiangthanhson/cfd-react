import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import authService from "../../../services/authService";

export function ProfileInfo() {
  let { register, handleSubmit, error } = useForm();

  const submit = async (form) => {
    const res = await authService.updateInfo(form);
  };
  return (
    <form className="tab1" onSubmit={handleSubmit(submit)}>
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          className={error.name && "login-error"}
          {...register("name", { required: true })}
          type="text"
          placeholder="Nguyễn Văn A"
        />
        {error.name && <p className="errorInput">{error.name}</p>}
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input
          className={error.phone && "login-error"}
          {...register("phone", { pattern: "phone" })}
          type="text"
          placeholder="0949******"
        />
        {error.phone && <p className="errorInput">{error.phone}</p>}
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input
          className={error.email && "login-error"}
          {...register("email", { pattern: "email" })}
          type="text"
          defaultValue="vuong.dang@dna.vn"
          type="text"
        />
        {error.phone && <p className="errorInput">{error.email}</p>}
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input
          className={error.urlFb && "login-error"}
          {...register("urlFb", { pattern: "urlFb" })}
          type="text"
          placeholder="Facebook url"
        />
        {error.phone && <p className="errorInput">{error.urlFb}</p>}
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input
          className={error.urlSkype && "login-error"}
          {...register("urlSkype", { pattern: "urlSkype" })}
          type="text"
          placeholder="Skype url"
        />
        {error.phone && <p className="errorInput">{error.urlSkype}</p>}
      </label>
      <button className="btn main rect" type="submit">
        LƯU LẠI
      </button>
    </form>
  );
}
