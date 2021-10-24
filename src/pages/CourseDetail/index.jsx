import React from "react";
import BannerDetail from "./components/BannerDetail";
import Content from "./components/Content";
import { CourseList } from "../../components";
import { useParams } from "react-router";

export default function CourseDetail() {

  let {slug} = useParams()

  let listProject = [
    {
      name: "React JS",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Vương Đặng",
      img: "img/img.png",
    },
    {
      name: "Animation",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img2.png",
    },
    {
      name: "Scss, Grunt JS và Boostrap 4",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img3.png",
    },
  ];
  let listCourse = [
    {
      name: "Front-end căn bản",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Vương Đặng",
      img: "img/img.png",
    },
    {
      name: "Front-end nâng cao",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img2.png",
    },
    {
      name: "Laravel framework",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img3.png",
    },
  ];
  return (
    <main className="course-detail" id="main">
      <BannerDetail />
      <Content />
      <CourseList smallTitle="DỰ ÁN" name="THÀNH VIÊN" list={listProject} />
      <CourseList smallTitle="KHÓA HỌC" name="LIÊN QUAN" list={listCourse} />
    </main>
  );
}
