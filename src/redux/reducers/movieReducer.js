import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SET_RESULTS } from "../actions/actionTypes";

const initialState = {
  results: [],
  favourites: JSON.parse(localStorage.getItem('favourites')) || []
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
      console.log(favouritesCopy);
      favouritesCopy.push(action.payload)
      localStorage.setItem('favourites',JSON.stringify(favouritesCopy))

      return {
        ...state,
        favourites: [...favouritesCopy]
      }
    case REMOVE_FROM_FAVOURITES:
      const newList = state.favourites.filter(i => i.id !== action.payload.id)
      localStorage.setItem('favourites', JSON.stringify(newList));

      return {
        ...state,
        favourites: newList
      }
    default:
      return state;
  }
};
