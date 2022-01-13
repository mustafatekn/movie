import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addToFavourites } from "../redux/actions/movieActions";
import NotFound from '../img/notFound.png'

export default function Result({result}) {

    const favourites = useSelector(state => state.favourites);
    const index = favourites.indexOf(result);

    const dispatch = useDispatch();

    return (
        <tr>
            <td>{result.title}</td>
            <td><img src={!result.backdrop_path ? NotFound : `https://image.tmdb.org/t/p/w500${result.backdrop_path}`} className="w-100 rounded"/></td>
            <td>{result.release_date}</td>
            <td>{result.popularity}</td>
            <td>{!result.overview ? "Unknown for now" : result.overview}</td>
            <td>{index < 0 ? <button type="button" className="btn btn-sm btn-success" onClick={() => dispatch(addToFavourites(result)) }>Add to favourites</button> : 
            <button type="button" className="btn btn-sm btn-danger" onClick={() => dispatch(addToFavourites(result)) }>Remove from favourites</button>}</td>
        </tr>
    )
}
