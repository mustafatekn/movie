import React from "react";
import { useSelector } from "react-redux";
import NotFound from '../img/notFound.png'
export default function Results() {
    const results = useSelector(state => state.results);
  return (
    <div class="table-responsive">
      <table class="table">
          <thead>
              <tr>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Original Language</th>
                  <th>Release Date</th>
                  <th>Popularity</th>
                  <th>Adult</th>
                  <th>Vote Average</th>
                  <th>Vote Count</th>
                  <th>Overview</th>
              </tr>
          </thead>
          <tbody>
              {!results ? ( <p>Looks like you did not search anything yet</p>)
              : (
                  results.map(result => (
                      <tr>
                          <td>{result.title}</td>
                          <td><img src={!result.backdrop_path ? NotFound : `https://image.tmdb.org/t/p/w500${result.backdrop_path}`} className="w-100"/></td>
                          <td>{result.original_language}</td>
                          <td>{result.release_date}</td>
                          <td>{result.popularity}</td>
                          <td>{result.adult}</td>
                          <td>{result.vote_average}</td>
                          <td>{result.vote_count}</td>
                          <td>{result.overview}</td>
                      </tr>
                  ))
              )}
          </tbody>
      </table>
    </div>
  );
}
