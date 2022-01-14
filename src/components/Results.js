import React from "react";
import { useSelector } from "react-redux";
import Result from "./Result";

export default function Results() {
    const results = useSelector(state => state.results);
    const favourites = useSelector(state => state.favourites);
  return (
    <div className="table">
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
                      <Result result={result} key={result.id} favourites={favourites}/>
                  ))
              )}
          </tbody>
      </table>
    </div>
  );
}