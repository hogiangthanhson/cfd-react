import React, {useState} from "react";

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
  });

  const [error, setError] = useState({});
  const handleInputChange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const submit = () => {
    let errorObject = {};
    if (!form.name) {
      errorObject.name = "Vui long dien ho vao ten";
    }
    if (!phonePattern.test(form.phone)) {
      errorObject.phone = "Vui long nhap dung dinh dang phone";
    }
    if (!emailPattern.test(form.email)) {
      errorObject.email = "Vui long nhap dung dinh dang email";
    }
    if (!urlPattern.test(form.url)) {
      errorObject.url = "Vui long nhap dung dinh dang url";
    }
    setError(errorObject);
    if (Object.keys(errorObject).length === 0) {
      alert("Thanh Cong");
    }
  };
  return (
    <div className="form">
      <label>
        <p>Họ và tên<span>*</span></p>
        <input onChange={handleInputChange} name="name" value={form.name} type="text" placeholder="Họ và tên bạn"/>
      </label>
      <label>
        <p>Số điện thoại</p>
        <input onChange={handleInputChange} name="phone" value={form.phone} type="text" placeholder="Số điện thoại" />
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input onChange={handleInputChange} name="email" value={form.email} type="text" placeholder="Email của bạn" />
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
        <textarea name id cols={30} rows={10} defaultValue={""} />
      </label>
      <div className="btn main rect">đăng ký</div>
    </div>
  );
}
