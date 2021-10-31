import React, { useEffect, useState } from "react";
import { CourseList } from "../../components";
import Loading from "../../components/Loading";
import courseService from "../../services/courseService";

export default function Course() {
  let [state, setState] = useState({
    data: {},
    loading: true,
  });
  useEffect(async () => {
    let data = await courseService.home();
    setState({
      loading: false,
      data,
    });
  }, []);
  let { loading, data } = state;
  if (loading) return <Loading />;
  return (
    <main className="homepage" id="main">
      <CourseList
        title="Khoá học CFD"
        description="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is
      that it has a more-or-less normal"
        smallTitle="Khóa học"
        type="offline"
        name="Offline"
        list={data.offline}
      />
      <CourseList smallTitle="Khóa học" type="online" name="Online" list={data.online} />
    </main>
  );
}
