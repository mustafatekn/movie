import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [searchString, setSearchString] = useState("");

  const searchMovie = () => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=726dd70a1ae0647cf0af648e6cd034c2&query=${searchString}`
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjZkZDcwYTFhZTA2NDdjZjBhZjY0OGU2Y2QwMzRjMiIsInN1YiI6IjYxZGZkZDFiNWJjZTllMDA0MTczN2M5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xXCZprAhL-xTM-cdXRk5cVuD8v9rTtkI-TVYmu_uvhw"
  
    axios.get(
      url,
      {
        Authorization:`Bearer ${token}`,
        'Content-type': 'application/json;charset=utf-8'
      }
    ).then((res) => {
      console.log(res.data);
    });
  };
  
  useEffect(() => {
    searchMovie();
  })

  return (
    <input
        type="text"
        onChange={(e) => setSearchString(e.target.value)}
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
  );
}
