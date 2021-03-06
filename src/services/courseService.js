import { api, callApi, callApiWithToken } from "../core";

const courseService = {
  home() {
    return callApi(`${api}/elearning/v4/home`);
  },
  detail(slug) {
    return callApi(`${api}/elearning/v4/course/${slug}`);
  },
  courseRelate(slug) {
    return callApi(`${api}/elearning/v4/course-related/${slug}`);
  },
  register(slug, data) {
    return callApiWithToken(`${api}/elearning/v4/course-register/${slug}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  contact(data) {
    return callApi(`${api}/elearning/v4/contact`,{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
  },
  list() {
    return callApi(`${api}/elearning/v4/courses`);
  },
};

export default courseService;
