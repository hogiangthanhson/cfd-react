import { GET_LIST_COURSE } from "../type";

const initialState = {
  offline: null,
  online: null,
};

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_COURSE:
      return {
        ...state,
        ...action.payload,
      };
  }
  return state;
}
