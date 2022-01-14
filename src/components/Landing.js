import React from "react";
import Results from "./Results";
import Search from "./Search";
import SideBar from "./SideBar";

export default function Landing() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <SideBar />
        </div>
        <div className="col-lg-10">
          <Search />
          <Results />
        </div>
      </div>
    </div>
  );
}
