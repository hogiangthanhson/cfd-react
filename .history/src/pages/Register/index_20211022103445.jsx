import React, { useState } from "react";
import RegisterInfo from "./Components/RegisterInfo";

const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

export default function Register() {
  const [form, setForm] = useState({
    name: ''
  });

  const [error, setError] = useState({});
  const handleInputChange = (e) => {
    const {name, value} = e.currentTarget
    setForm({
      ...form,
      [name]: value,
    });
  }
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

      setError(errorObject)
      if (Object.keys(errorObject).length === 0) {
        alert("Thanh Cong");
      }
    };
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <RegisterInfo />

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