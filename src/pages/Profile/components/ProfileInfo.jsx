import React, { useState } from "react";

const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export function ProfileInfo() {
  const [form, setForm] = useState({
    email: 'vuong.dangha@dna.vn'
  })
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
      errorObject.phone = "Vui long nhap dung dinh dang phone"
    }
    setError(errorObject)
    if(Object.keys(errorObject).length === 0) {
      alert('Thanh Cong')
    }
  }
  return (
    <div className="tab1">
      <label>
        <p>Họ và tên<span>*</span></p>
        <input onChange={handleInputChange}  name="name" value={form.name}  type="text" placeholder="Nguyễn Văn A" />
        {error.name && <p className="error-text">{error.name}</p>}
      </label>
      <label>
        <p>Số điện thoại<span>*</span></p>
        <input onChange={handleInputChange}  name="phone" value={form.phone} type="text" placeholder="0949******" />
        {error.phone && <p className="error-text">{error.phone}</p>}
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
      <div className="btn main rect" onClick={submit}>LƯU LẠI</div>
    </div>
  );
}
