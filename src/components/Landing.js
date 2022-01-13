import React from "react";
import Results from "./Results";
import Search from "./Search";

export default function Landing() {
  return (
    <div className="container-fluid">
      <Search />
      <Results />
    </div>
  );
}
