import React from "react";
import { CourseList } from "../../components";

export default function Course() {
  let listOffline = [
    {
      name: "Front-end Căn Bản",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img1.png",
    },
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
    {
      name: "UX/UI Design",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img4.png",
 
    },
    {
      name: "Web Responsive",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img5.png",
    },
  ];
  let listOnline = [
    {
      name: "Front-end Căn Bản",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img6.png",
    },
    {
      name: "Front-end nâng cao",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Vương Đặng",
      img: "img/img7.png",
    },
    {
      name: "Laravel framework",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img8.png",
    },
  ];
  return (
    <main className="homepage" id="main">
      <CourseList title="Khóa học CFD" description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is
      that it has a more-or-less normal" smallTitle="Khóa học" name="Offline" list={listOffline}/>
      <CourseList smallTitle="Khóa học" name="Online" list={listOnline} />
    </main>
  );
}
