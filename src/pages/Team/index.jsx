import React from "react";
import Member from "./components/Member";

export default function Team() {
  let listMentor = [
    {
      name: "Trần Nghĩa",
      description: "Founder & Creative Front-End Developer",
    },
    {
      name: "Đặng Thuyền Vương",
      description: "Co-Founder & Fullstack Developer",
    },
    {
      name: "Đặng Thuyền Quân",
      description: "Co-Founder & Backend Developer",
    },
    {
      name: "Nguyễn Đức Huy",
      description: "Co-Founder & Front-End Developer",
    },
  ];
  let listStudent = [
    {
      name: "Diệp Anh Thy",
      description: "CFD1-Offline",
    },
    {
      name: "Huỳnh Tiến Tài",
      description: "CFD1-Offline",
    },
    {
      name: "Ngô Thành Long",
      description: "CFD1-Offline",
    },
    {
      name: "Trần Anh Tuấn",
      description: "CFD1-Offline",
    },
    {
      name: "Nguyễn Thanh Tùng",
      description: "CFD1-Offline",
    },
    {
      name: "Phạm Thành Trung",
      description: "CFD1-Offline",
    },
  ];
  return (
    <main className="team" id="main">
      <section>
        <div className="container">
          <div className="top">
            <h2 className="main-title">cfd team</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum
              sem non luctus
            </p>
          </div>
          <div className="list row">
            {listMentor.map(function (o, i) {
              return (
                <div className="item col-md-6 col-sm-6">
                  <Member key={i} name={o.name} description={o.description}  />
                </div>
              );
            })}
            {listStudent.map(function (o, i) {
              return (
                <div className="item col-md-3 col-sm-4 col-xs-6">
                  <Member key={i} name={o.name} description={o.description} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
