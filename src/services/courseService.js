import { api } from "./config";

const courseService = {
  home() {
    return fetch(`${api}/elearning/v4/home`).then((res) => res.json());
  },
  detail(slug) {
    return fetch(`${api}/elearning/v4/course/${slug}`).then((res) => res.json());
  },
  register(slug) {
    return fetch(`${api}/elearning/v4/course-register/${slug}`).then((res) => res.json());
  },
};

export default courseService;
