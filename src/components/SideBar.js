import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import RemoveButton from "./RemoveButton";

export default function SideBar() {
  const [visibility, setVisibility] = useState(false)
  const [screenWidth,setScreenWidth] = useState();

  const favourites = useSelector((state) => state.favourites);
  const loadingAdd = useSelector((state) => state.loadingAdd);
  const loadingRemove = useSelector((state) => state.loadingRemove)
  
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
    <div className="p-3 py-4 border" id="sidebar">
      <h2 onClick={(e) => handleClick(e)} id="sidebarHeading">Favourites ({favourites.length})</h2>

      {visibility && <div className="mt-5"
         id="sidebarFavouritesWrapper">
      {favourites.length === 0 && !(loadingAdd || loadingRemove) && 
        <p className="text-muted">
          Looks like you did not favourite any movie yet.
        </p>
      }
      
      {favourites.length > 0 && (loadingAdd || loadingRemove) && <Loader/>}

      {favourites.length > 0 && !(loadingAdd || loadingRemove) && 
        <div className="d-flex flex-column mt-3" id="favourites">
        {favourites.map((favourite) => (
        <div className="flex-row my-1" key={favourite.id}>
          <div className="d-flex justify-content-between">
            <span>{favourite.title}</span>
            <RemoveButton title="-" movie={favourite}/>
          </div>
        </div>
      ))}
      </div>
      }
      </div>}
    </div>
  );
}
