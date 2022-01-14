import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RemoveButton from "./RemoveButton";

export default function SideBar() {
  const [visibility, setVisibility] = useState(false)
  const [screenWidth,setScreenWidth] = useState();
  const favourites = useSelector((state) => state.favourites);
  
  
  const handleClick = (e) => {
    if(e.target.offsetWidth > 300){
      setVisibility(!visibility);
    }else{
      setVisibility(true)
    }
  }

  useEffect(() => {
    document.addEventListener('resize', setScreenWidth(window.innerWidth));
    if(screenWidth > 992){
      setVisibility(true)
    }

  },[screenWidth])

  return (
    <div className="bg-dark p-3 py-4" id="sidebar">
      <h5 onClick={(e) => handleClick(e)} className="text-white" id="sidebarHeading">Favourites ({favourites.length})</h5>

      {visibility && <div className="my-4"
         id="sidebarFavouritesWrapper">
      {favourites.length === 0 ? (
        <p className="text-muted">
          Looks like you did not favourite any movie yet.
        </p>
      ) : (
        <div className="d-flex flex-column">
        {favourites.map((favourite) => (
        <div className="flex-row my-1" key={favourite.id}>
          <div className="d-flex justify-content-between">
            <span className="text-white">{favourite.title}</span>
            <RemoveButton title="-" movie={favourite}/>
          </div>

        </div>
      ))}
      </div>
      )}
      </div>}
    </div>
  );
}
