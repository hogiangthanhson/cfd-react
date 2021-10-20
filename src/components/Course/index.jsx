import React from "react";

export default function Course({ img, name, description, teacher, status, person, liked, share, slug }) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a className="cover" href="#">
          <img src={img} alt="" />
          {status === "Đã kết thúc" && <span className="badge b1">{status}</span>}
          {status === "Đang diễn ra" && <span className="badge b2">{status}</span>}
          {status === "Sắp khai giảng" && <span className="badge b3">{status}</span>}
          <div className="hover">
            <div className="top">
              {person && (
                <div className="user">
                  <img src="img/icon-user-white.svg" alt="" />
                  {person}
                </div>
              )}
              {liked && (
                <div className="heart">
                  <img src="img/icon-heart.svg" alt="" /> {liked}
                </div>
              )}
            </div>
            {share && (
              <div className="share">
                <img src="img/icon-viewmore.svg" alt="" />
              </div>
            )}
          </div>
        </a>
        <div className="info">
          <a className="name" href="#">
            {name}
          </a>
          <p className="des">{description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="img/avt.png" alt="" />
            </div>
            <div className="name">{teacher}</div>
          </div>
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  );
}
