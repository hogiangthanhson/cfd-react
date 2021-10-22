import React, {useState} from "react";

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: '',
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
        {error.name && <p className="error-text">{error.name}</p>}
      </label>
      <label>
        <p>Số điện thoại<span>*</span></p>
        <input onChange={handleInputChange} name="phone"
          value={form.phone}
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
          onChange={handleInputChange}
          name="email"
          value={form.email}
          type="text"
          placeholder="Email của bạn"
        />
        {error.email && <p className="error-text">{error.email}</p>}
      </label>
      <label>
        <p>
          URL Facebook<span>*</span>
        </p>
        <input
          onChange={handleInputChange}
          name="url"
          value={form.url}
          type="text"
          placeholder="https://facebook.com"
        />
        {error.url && <p className="error-text">{error.url}</p>}
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
        <input
          onChange={handleInputChange}
          name="des"
          value={form.des}
          type="text"
          placeholder="Mong muốn cá nhân và lịch bạn có thể học."
        />
      </label>
      <div className="btn main rect" onClick={submit}>
        đăng ký
      </div>
    </div>
  );
}
