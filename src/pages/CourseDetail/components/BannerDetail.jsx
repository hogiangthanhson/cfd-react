import React from "react";
import { Link } from "react-router-dom";

export default function BannerDetail({ detail }) {
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
          <Link to={`/dang-ky/${detail.slug}`} className="btn white round">
            đăng ký
          </Link>
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
