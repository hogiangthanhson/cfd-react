import React, { useState } from "react";

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export default function ProfileInfo() {
  const [form, setForm] = useState({})
  const [error, setError] = useState({})
  const handleInputChange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value; 
    setForm({
      ...form,
      [name]: value
    })
  }

  const submit = () => {
    let errorObject = {};
    if(!form.name) {
      errorObject.name = "Vui long dien ho ten"
    }
    if(!phonePattern.test(form.phone)) {
      errorObject.name = "Vui long nhap dung dinh dang phone"
    }
    if(!emailPattern.test(form.email)) {
      errorObject.name = "Vui long nhap dung dinh dang email"
    }
  }
  return (
    <div className="tab1" style={{ display: "none" }}>
      <label>
        <p>Họ và tên<span>*</span></p>
        <input onChange={handleInputChange}  name="name" value={form.name}  type="text" placeholder="Nguyễn Văn A" />
      </label>
      <label>
        <p>Số điện thoại<span>*</span></p>
        <input onChange={handleInputChange}  name="phone" value={form.phone} type="text" placeholder="0949******" />
      </label>
      <label>
        <p>Email<span>*</span></p>
        <input onChange={handleInputChange}  name="email" value={form.email} defaultValue="vuong.dang@dna.vn" disabled type="text" />
      </label>
      <label>
        <p>Facebook<span>*</span></p>
        <input type="text" placeholder="Facebook url" />
      </label>
      <label>
        <p>Skype<span>*</span></p>
        <input type="text" placeholder="Skype url" />
      </label>
      <div className="btn main rect">LƯU LẠI</div>
    </div>
  );
}
