import React, { useState } from "react";
import { useForm } from "../../../hooks/useForm";

export function ProfileInfo() {
  let { register, handleSubmit, error } = useForm();

  const submit = (form) => {
    console.log(form);
  };
  return (
    <form className="tab1" onSubmit={handleSubmit}>
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
          disabled
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
