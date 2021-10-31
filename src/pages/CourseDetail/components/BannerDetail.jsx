import React from "react";

export default function BannerDetail({detail}) {
  console.log(detail)
  return (
    <section className="banner style2" style={{ background: "#cde6fb" }}>
      <div className="container">
        <div className="info">
          <h1>{detail.title}</h1>
          <div className="row">
            <div className="date">
              <strong>Khai giảng:</strong> {detail.opening_time}
            </div>
            <div className="time">
              <strong>Thời lượng:</strong> {detail.count_video} buổi
            </div>
          </div>
          <div className="btn white round">
            đăng ký
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="video">
            <div className="icon">
              <img src="/img/play-icon-white.png" alt="" />
            </div>
            <span>giới thiệu</span>
          </div>
          <div className="money">{detail.money} VND</div>
        </div>
      </div>
    </section>
  );
}
