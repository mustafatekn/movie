import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
  SET_RESULTS,
  SEARCH_LOADING_UI,
  STOP_SEARCH_LOADING_UI,
  ADD_LOADING_UI,
  STOP_ADD_LOADING_UI,
  REMOVE_LOADING_UI,
  STOP_REMOVE_LOADING_UI,
} from "../actions/actionTypes";

const initialState = {
  results: [],
  favourites: JSON.parse(localStorage.getItem("favourites")) || [],
  loadingSearch: false,
  loadingAdd: false,
  loadingRemove: false
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    case ADD_TO_FAVOURITES:
      let favouritesCopy = state.favourites;

      favouritesCopy.push(action.payload);
      localStorage.setItem("favourites", JSON.stringify(favouritesCopy));

      return {
        ...state,
        favourites: [...favouritesCopy],
      };
    case REMOVE_FROM_FAVOURITES:
      const newList = state.favourites.filter(
        (i) => i.id !== action.payload.id
      );
      localStorage.setItem("favourites", JSON.stringify(newList));

      return {
        ...state,
        favourites: newList,
      };
    case SEARCH_LOADING_UI:
      return {
        ...state,
        loadingSearch: true,
      };
    case STOP_SEARCH_LOADING_UI:
      return {
        ...state,
        loadingSearch: false,
      };
    case ADD_LOADING_UI:
      return {
        ...state,
        loadingAdd: true,
      };
    case STOP_ADD_LOADING_UI:
      return {
        ...state,
        loadingAdd: false,
      };
    case REMOVE_LOADING_UI:
      return {
        ...state,
        loadingRemove: true,
      };
    case STOP_REMOVE_LOADING_UI:
      return {
        ...state,
        loadingRemove: false,
      };
    default:
      return state;
  }
};
