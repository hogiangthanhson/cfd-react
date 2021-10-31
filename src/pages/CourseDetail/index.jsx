import React, { useEffect, useState } from "react";
import BannerDetail from "./components/BannerDetail";
import Content from "./components/Content";
import { CourseList } from "../../components";
import courseService from "../../services/courseService";
import { useParams } from "react-router";
import Loading from "../../components/Loading";

export default function CourseDetail() {
  let [state, setState] = useState({
    data: {},
    loading: true,
  });
  let { slug } = useParams();
  useEffect(async () => {
    let data = await courseService.detail(slug);
    setState({
      loading: false,
      data,
    });
  }, [slug]);

  let { loading, data } = state;
  if (loading) return <Loading />;
  return (
    <main className="course-detail" id="main">
      <BannerDetail detail={data.data} />
      <Content content={data.data}/>
      {/* <CourseList smallTitle="DỰ ÁN" name="THÀNH VIÊN" list={listProject} />
      <CourseList smallTitle="KHÓA HỌC" name="LIÊN QUAN" list={listCourse} /> */}
    </main>
  );
}
