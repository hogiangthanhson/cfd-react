import React, { useEffect, useState } from "react";
import { CourseList } from "../../components";
import courseService from "../../services/courseService";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCourseAction } from "../../store/action/coursesAction";

export default function Course() {
  const dispatch = useDispatch();
  const { offline, online } = useSelector((store) => store.course);

  useEffect(async () => {
    if (!offline) dispatch(fetchListCourseAction());
  }, []);
  return (
    <main className="homepage" id="main">
      <CourseList
        title="Khoá học CFD"
        description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is
      that it has a more-or-less normal"
        smallTitle="Khóa học"
        name="Offline"
        list={offline}
      />
      <CourseList smallTitle="Khóa học" name="Online" list={online} />
    </main>
  );
}
