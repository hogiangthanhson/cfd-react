import React from "react";
import ProjectList from "./components/ProjectList";

export default function Projects() {
  var listProject = [
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
    <main className="projectpage" id="main">
      <ProjectList
        description="Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem"
        listProject={listProject}
      />
    </main>
  );
}
