import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectTitle from "./ProjectTitle";

export default function ProjectList() {
  let listProject = [
    {
      name: "Furnitown",
      makeBy: "Trần Nghĩa",
      img: "img/project/project (1).jpg",
    },
    {
      name: "kymco",
      makeBy: "Huỳnh Tiến Tài",
      img: "img/project/project (2).jpg",
    },
    {
      name: "gboxmb",
      makeBy: "Nguyễn Văn Tuấn",
      img: "img/project/project (3).jpg",
    },
    {
      name: "Wooder",
      makeBy: "Nguyễn Đức Huy",
      img: "img/project/project (4).jpg",
    },
    {
      name: "gboxmb",
      makeBy: "Nguyễn Văn Tuấn",
      img: "img/project/project (1).jpg",
    },
    {
      name: "wooder",
      makeBy: "Nguyễn Đức Huy",
      img: "img/project/project (2).jpg",
    },
    {
      name: "gboxmb",
      makeBy: "Nguyễn Văn Tuấn",
      img: "img/project/project (1).png",
    },
    {
      name: "Wooder",
      makeBy: "Nguyễn Đức Huy",
      img: "img/project/project (2).png",
    },
  ];
  return (
    <section className="section-1">
      <div className="container">
        <ProjectTitle />
        <div className="list row">
          {listProject.map((o, i) => (<ProjectItem key={i} name={o.name} makeBy={o.makeBy} img={o.img}  />))};
        </div>
        <div className="bottom">
          <div className="btn overlay round btn-more">tải thêm</div>
        </div>
      </div>
    </section>
  );
}
