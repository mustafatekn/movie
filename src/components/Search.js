import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getResults } from "../redux/actions/movieActions";

export default function Search() {
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResults(searchString))
  },[searchString]);

  return (
    <div className="">
      <input
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
  );
}
