import { CourseList } from "../../components";

import Banner from "./components/Banner";
import Different from "./components/Different";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import Action from "./components/Action";
import { useEffect } from "react";
import courseService from "../../services/courseService";
import { useState } from "react";
import Loading from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCourseAction } from "../../store/action/coursesAction";
import { useTranslate } from "../../core";

export default function Home() {
  let [state, setState] = useState({
    data: {},
    loading: true,
  });

  const dispatch = useDispatch();
  const { offline, online } = useSelector((store) => store.course);

  useEffect(async () => {
    let data = await courseService.home();
    if (!offline) dispatch(fetchListCourseAction());
    let course = await setState({
      loading: false,
      data,
    });
  }, []);

  const { t } = useTranslate();
  
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList
        name="Khóa học Offline"
        description={t(
          "The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
        )}
        list={offline}
      />
      <CourseList name="Khóa học Online" list={online} />
      <Different />
      {/* <section className="section-testimonial">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
          </div>
          <Testimonial review={data.review} />
        </div>
      </section>
      <Gallery gallery={data.gallery} /> */}
      <Action />
    </main>
  );
}
