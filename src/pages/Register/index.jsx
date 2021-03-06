import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import courseService from "../../services/courseService";
import RegisterForm from "./Components/RegisterForm";
import RegisterInfo from "./Components/RegisterInfo";

export default function Register() {
  let [state, setState] = useState({
    loading: true,
    data: {},
  });

  let { slug } = useParams();

  useEffect(async () => {
    let data = await courseService.detail(slug);
    setState({
      data,
      loading: false,
    });
  }, [slug]);

  let { loading, data } = state;
  if (loading) return <Loading />;

  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <RegisterInfo info={data.data}/>
            <RegisterForm />
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
