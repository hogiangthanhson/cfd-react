import { Skeleton } from "@mui/material";
import React from "react";
import { Link, generatePath } from "react-router-dom";

export default function CourseItem(props) {
  let { loading } = props;

  return (
    <div className="col-md-4 course">
      <div className="wrap">
        {loading ? (
          <Skeleton height={250} />
        ) : (
          <Link className="cover" to={"/chi-tiet-khoa-hoc/" + props.slug}>
            <img src={props.thumbnail.link} alt="" />
            <span
              className={`badge ${
                props.course_status === "sap-khai-gian"
                  ? "b3"
                  : props.course_status === "dang-dien-ra"
                  ? "b2"
                  : "b1"
              }`}
            >
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
        )}

        <div className="info">
          {loading ? (
            <Skeleton variant="text" />
          ) : (
            <a className="name" href="#">
              {props.title}
            </a>
          )}
          {loading ? (
            <Skeleton variant="text" height={30} />
          ) : (
            <p className="des">{props.short_description}</p>
          )}
        </div>
        {loading ? (
          <Skeleton variant="text" heigh={50} />
        ) : (
          <div className="bottom">
            <div className="teacher">
              <div className="avatar">
                <img src={props.teacher.avatar.link} alt="" />
              </div>
              <div className="name">{props.teacher.title}</div>
            </div>
            <Link to={generatePath("dang-ky/:slug", props)} className="register-btn">
              Đăng Ký
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
