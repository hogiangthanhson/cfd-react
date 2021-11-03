import React from "react";

export default function Content({ content }) {
  return (
    <section className="section-2">
      <div className="container">
        <p className="des">{content.long_description}</p>
        <h2 className="title">giới thiệu về khóa học</h2>
        <div className="cover">
          <img src="/img/course-detail-img.png" alt="" />
        </div>
        <h3 className="title">nội dung khóa học</h3>
        {content.content.map((e, i) => (
          <div className="accordion" key={i}>
            <div className="accordion__title">
              <div className="date">Ngày {i + 1}</div>
              <h3>{e.title}</h3>
            </div>
            <div className="content">{e.content}</div>
          </div>
        ))}
        <h3 className="title">yêu cầu cần có</h3>
        <div className="row row-check">
          {content.required.map((e, i) => (
            <div className="col-md-6" key={i}>
              {e.content}
            </div>
          ))}
        </div>
        <h3 className="title">hình thức học</h3>
        <div className="row row-check">
          {content.benefits.map((e, i) => (
            <div className="col-md-6" key={i}>
              {e.content}
            </div>
          ))}
        </div>
        <h3 className="title">
          <div className="date-start">lịch học</div>
          <div className="sub">
            *Lịch học và thời gian có thể thống nhất lại theo số đông học viên.
          </div>
        </h3>
        <p>
          <strong>Ngày bắt đầu: </strong> {content.opening_time} <br />
          <strong>Thời gian học: </strong> {content.schedule}
        </p>
        <h3 className="title">Người dạy</h3>
        <div className="teaches">
          <div className="teacher">
            <div className="avatar">
              <img src={content.teacher.avatar.link} alt="" />
            </div>
            <div className="info">
              <div className="name">{content.teacher.title}</div>
              <div className="title">{content.teacher.position}</div>
              <p className="intro">{content.teacher.description}</p>
              <p>
                <strong>Website:</strong> <a href="#">{content.teacher.website}</a>
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="user">
            <img src="/img/user-group-icon.png" alt="" /> {content.number_student_default} bạn đã
            đăng ký
          </div>
          <div className="btn main btn-register round">đăng ký</div>
          <div className="btn-share btn overlay round btn-icon">
            <img src="/img/facebook.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
