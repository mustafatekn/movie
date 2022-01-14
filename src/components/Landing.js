import React,{useState} from "react";
import Results from "./Results";
import Search from "./Search";
import SideBar from "./SideBar";

export default function Landing() {
  const [searchString, setSearchString] = useState("");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2">
          <SideBar />
        </div>
        <div className="col-lg-10">
          <Search searchString={searchString} setSearchString={setSearchString}/>
          <Results searchString={searchString}/>
        </div>
      </div>
    </div>
  );
}
