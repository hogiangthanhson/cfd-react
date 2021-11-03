import React from "react";

export default function RegisterInfo({info}) {
  return (
    <>
      <div className="main-sub-title">ĐĂNG KÝ</div>
      <h1 className="main-title">{info.title}</h1>
      <div className="main-info">
        <div className="date"><strong>Khai giảng:</strong> {info.opening_time}</div>
        <div className="time"><strong>Thời lượng:</strong> {info.count_video} buổi</div>
        <div className="time"><strong>Học phí:</strong> {info.money}</div>
      </div>
    </>
  );
}
