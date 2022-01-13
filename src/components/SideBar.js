import React from "react";
import { useSelector } from "react-redux";

export default function SideBar() {
  const favourites = useSelector((state) => state.favourites);

  return (
    <div className="bg-dark p-3" id="sidebar">
      <h5 className="text-white">Favourites ({favourites.length})</h5>

      <div className="my-4">
      {favourites.length === 0 ? (
        <p className="text-white">
          Looks like you did not favourite any movie yet.
        </p>
      ) : (
        favourites.map((favourite) => (
          <div className="row my-2" key={favourite.id}>
              <div className="col-md-10"><p className="text-white">{favourite.title}</p></div>
              <div className="col-md-2"><button type="button" className="btn btn-sm btn-danger">-</button></div>
          </div>
        ))
      )}
      </div>
    </div>
  );
}
