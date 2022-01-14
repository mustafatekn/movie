import axios from "axios";
import { SET_RESULTS, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./actionTypes";

export const getResults = (searchString) => (dispatch) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=726dd70a1ae0647cf0af648e6cd034c2&query=${searchString}`;
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjZkZDcwYTFhZTA2NDdjZjBhZjY0OGU2Y2QwMzRjMiIsInN1YiI6IjYxZGZkZDFiNWJjZTllMDA0MTczN2M5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xXCZprAhL-xTM-cdXRk5cVuD8v9rTtkI-TVYmu_uvhw";
  axios
    .get(url, {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json;charset=utf-8",
    })
    .then((res) => {
      dispatch({ type: SET_RESULTS, payload: res.data.results });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addToFavourites = (result) => (dispatch) => {
  dispatch({type:ADD_TO_FAVOURITES, payload:result});
}

export const removeFromFavourites = (result) => (dispatch) => {
  dispatch({type:REMOVE_FROM_FAVOURITES, payload:result})
}
