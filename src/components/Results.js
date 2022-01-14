import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import Result from "./Result";

export default function Results({ searchString }) {
  const results = useSelector((state) => state.results);
  const favourites = useSelector((state) => state.favourites);
  const loading = useSelector((state) => state.loadingSearch);
  return (
    <div className="table">
      {results.length > 0 && loading && searchString !== "" && (
        <Loader/>
      )}

      {results.length > 0 && !loading && (
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
            {results.map((result) => (
              <Result result={result} key={result.id} favourites={favourites} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
