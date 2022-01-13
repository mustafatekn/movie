import { SET_RESULTS } from "../actions/actionTypes";

const initialState = {
  results: [],
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};
