import courseService from "../../services/courseService";
import { GET_LIST_COURSE } from "../type";

export const initCourseAction = (data) => {
  return {
    type: GET_LIST_COURSE,
    payload: data,
  };
};

export const fetchListCourseAction = () => {
  return async (dispatch) => {
    let data = await courseService.list();
    if (data.offline) {
      dispatch(initCourseAction(data));
    }
  };
};
