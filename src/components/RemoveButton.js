import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromFavourites } from "../redux/actions/movieActions";

export default function RemoveButton({title, movie}) {
    const dispatch = useDispatch();
    return (
        <button type="button" className="btn btn-sm btn-danger" onClick={() => dispatch(removeFromFavourites(movie)) }>{title}</button>
    )
}
