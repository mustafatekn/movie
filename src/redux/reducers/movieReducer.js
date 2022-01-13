import { ADD_TO_FAVOURITES, SET_RESULTS } from "../actions/actionTypes";

const initialState = {
  results: [],
  favourites: []
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }
    default:
      return state;
  }
};
