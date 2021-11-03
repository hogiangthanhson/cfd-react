import React from "react";
import { Link, generatePath } from "react-router-dom";

export default function CourseItem(props) {
  let badgeClass =
    props.course_status === "sap-khai-gian"
      ? "b3"
      : props.course_status === "dang-dien-ra"
      ? "b2"
      : "b1";
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={'/chi-tiet-khoa-hoc/' + props.slug}>
          <img src={props.thumbnail.link} alt="" />
          <span className={`badge ${badgeClass}`}>
            {props.course_status === "sap-khai-gian"
              ? "Sap khai giang"
              : props.course_status === "dang-dien-ra"
              ? "Dang dien ra"
              : "Da ket thuc"}
          </span>
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="/img/icon-user-white.svg" alt="" />
                25
              </div>
              <div className="heart">
                <img src="/img/icon-heart.svg" alt="" /> 0
              </div>
            </div>
            <div className="share">
              <img src="/img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </Link>
        <div className="info">
          <a className="name" href="#">
            {props.title}
          </a>
          <p className="des">{props.short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={props.teacher.avatar.link} alt="" />
            </div>
            <div className="name">{props.teacher.title}</div>
          </div>
          <Link to={generatePath('dang-ky/:slug',props)} className="register-btn">Đăng Ký</Link>
        </div>
      </div>
    </div>
  );
}
