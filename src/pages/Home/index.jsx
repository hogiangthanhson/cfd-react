import { CourseList } from "../../components";

import Banner from "./components/Banner";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Action from "./components/Action";

export default function Home() {
  let listOffline = [
    {
      status: "Đã kết thúc",
      person: "12",
      liked: "100",
      name: "Front-end Căn Bản",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img1.png",
      share: "true",
    },
    {
      status: "Đang diễn ra",
      person: "12",
      liked: "100",
      name: "React JS",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Vương Đặng",
      img: "img/img1.png",
      share: "true",
    },
    {
      status: "Sắp khai giảng",
      person: "12",
      liked: "100",
      name: "Animation",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img1.png",
      share: "true",
    },
    {
      status: "",
      person: "12",
      liked: "100",
      name: "Scss, Grunt JS và Boostrap 4",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img1.png",
      share: "true",
    },
    {
      status: "",
      person: "12",
      liked: "100",
      name: "UX/UI Design",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img1.png",
      share: "true",
    },
    {
      status: "",
      person: "12",
      liked: "100",
      name: "Web Responsive",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img1.png",
      share: "true",
    },
  ];
  let listOnline = [
    {
      status: "",
      person: "12",
      liked: "100",
      name: "Front-end Căn Bản",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img1.png",
      share: "true",
    },
    {
      status: "",
      person: "12",
      liked: "100",
      name: "Front-end nâng cao",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Vương Đặng",
      img: "img/img1.png",
      share: "true",
    },
    {
      status: "",
      person: "12",
      liked: "100",
      name: "Laravel framework",
      description: "One of the best corporate fashion brands in Sydney",
      teacher: "Trần Nghĩa",
      img: "img/img1.png",
      share: "true",
    },
  ];
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList
        name="Khóa học Offline"
        description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum
          is that it has a more-or-less normal"
        list={listOffline}
      />
      <CourseList name="Khóa học Online" list={listOnline} />
      <Different />
      <Testimonial />
      <Gallery />
      <Action />
    </main>
  );
}
