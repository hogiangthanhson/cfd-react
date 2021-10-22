import React, { useState } from "react";

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
      erro
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
        <input type="text" placeholder="0949******" />
      </label>
      <label>
        <p>Email<span>*</span></p>
        <input defaultValue="vuong.dang@dna.vn" disabled type="text" />
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
