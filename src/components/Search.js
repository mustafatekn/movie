import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getResults } from "../redux/actions/movieActions";

export default function Search({searchString, setSearchString}) {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResults(searchString))
  },[searchString]);

  return (
    <div className="py-4">
      <h1 className="h2" id="searchTitle">Search for films</h1>
      <input
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
        className="form-control mt-5"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
  );
}
