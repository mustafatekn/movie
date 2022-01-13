import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getResults } from "../redux/actions/movieActions";

export default function Search() {
  const [searchString, setSearchString] = useState("");
  const dispatch = useDispatch();

  const test = useSelector(state => state.results);

  useEffect(() => {
    dispatch(getResults(searchString))
    console.log(test);
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
