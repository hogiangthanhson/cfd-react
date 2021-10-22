import React from "react";
import ProfileAvatar from "./components/ProfileAvatar";

import ProfileCoin from "./components/ProfileCoin";
import ProfileCourse from "./components/ProfileCourse";
import ProfileHistory from "./components/ProfileHistory";
import ProfileInfo from "./components/ProfileInfo";
import ProfileProject from "./components/ProfileProject";

export default function Profile() {
  return (
    <main className="profile" id="main">
      <section>
        <ProfileAvatar />
        <div className="container">
          <div className="tab">
            <div className="tab-title">
              <a href="#" className="active">
                Thông tin tài khoản
              </a>
              <a href="#">Khóa học của bạn</a>
              <a href="#">Dự án đã làm</a>
              <a href="#">Lịch sử thanh toán</a>
              <a href="#">Quản lý COIN của tôi</a>
            </div>
            <div className="tab-content">
              <ProfileInfo />
              <ProfileCourse />           
              <ProfileProject />
              <ProfileHistory />              
              <ProfileCoin />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
