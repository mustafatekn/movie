import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NotFound from '../img/notFound.png'
import { addToFavourites } from "../redux/actions/movieActions";

export default function Results() {
    const results = useSelector(state => state.results);
    const dispatch = useDispatch();

  return (
    <div className="table-responsive">
      <table className="table align-middle">
          <thead>
              <tr>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Release Date</th>
                  <th>Popularity</th>
                  <th>Overview</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              {!results ? ( <p>Looks like you did not search anything yet</p>)
              : (
                  results.map(result => (
                      <tr key={result.id}>
                          <td>{result.title}</td>
                          <td><img src={!result.backdrop_path ? NotFound : `https://image.tmdb.org/t/p/w500${result.backdrop_path}`} className="w-100 rounded"/></td>
                          <td>{result.release_date}</td>
                          <td>{result.popularity}</td>
                          <td>{!result.overview ? "Unknown for now" : result.overview}</td>
                          <td><button type="button" className="btn btn-sm btn-success" onClick={() => dispatch(addToFavourites(result)) }>Add to favourites</button></td>
                      </tr>
                  ))
              )}
          </tbody>
      </table>
    </div>
  );
}
