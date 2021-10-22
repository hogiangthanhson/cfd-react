import React from "react";
import { useState } from "react";

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export default function Register() {
  const [form, setForm] = useState({
    name: ''
  });

  const [error, setError] = useState({});
  const handleInputChange = (e) => {
    let name = e.currentTarget.name;
    let value = e.currentTarget.value;
    setForm({
      ...form,
      [name]: value,
    });

    const submit = () => {
      let errorObject = {};
      if (!form.name) {
        errorObject.name = "Vui long dien ho vao ten";
      }
      if (!phonePattern.test(form.Phone)) {
        errorObject.phone = "Vui long nhap dung dinh dang phone";
      }
      if (!emailPattern.test(form.email)) {
        errorObject.email = "Vui long nhap dung dinh dang email";
      }

      if (Object.keys(errorObject).length === 0) {
        alert("Thanh Cong");
      }
    };
  };
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">Thực chiến front-end căn bản </h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> 15/11/2020
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
              <div className="time">
                <strong>Học phí:</strong> 6.000.000 VND
              </div>
            </div>
            <div className="form">
              <label>
                <p>
                  Họ và tên<span>*</span>
                </p>
                <input
                  onChange={handleInputChange}
                  name="name"
                  value={form.name}
                  type="text"
                  placeholder="Họ và tên bạn"
                />
                {error.name && <p className="">{error.name}</p>}
              </label>
              <label>
                <p>
                  Số điện thoại<span>*</span>
                </p>
                <input
                  onChange={handleInputChange}
                  name="phone"
                  value={form.phone}
                  type="text"
                  placeholder="Số điện thoại"
                />
                {error.phone && <p className="">{error.phone}</p>}
              </label>
              <label>
                <p>
                  Email<span>*</span>
                </p>
                <input
                  onchange={handleInputChange}
                  name="email"
                  value={form.email}
                  type="text"
                  placeholder="Email của bạn"
                />
                {error.email && <p className="">{error.email}</p>}
              </label>
              <label>
                <p>
                  URL Facebook<span>*</span>
                </p>
                <input
                  onchange={handleInputChange}
                  name="url"
                  value={form.url}
                  type="text"
                  placeholder="https://facebook.com"
                />
                {error.url && <p className="">{error.url}</p>}
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
                  onchange={handleInputChange}
                  name="name"
                  value={form.name}
                  type="text"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                />
              </label>
              <div className="btn main rect" >đăng ký</div>
            </div>
          </div>
        </div>
      </section>
      {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
    </main>
  );
}
