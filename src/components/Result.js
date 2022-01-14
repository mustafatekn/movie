import React from 'react'
import { useDispatch } from "react-redux";
import { addToFavourites } from "../redux/actions/movieActions";
import NotFound from '../img/notFound.png'
import RemoveButton from './RemoveButton';

export default function Result({result,favourites}) {
    
    const index = favourites.findIndex(i => i.id === result.id);
    const dispatch = useDispatch();

    return (
        <tr>
            <td>{result.title}</td>
            <td><img src={!result.backdrop_path ? NotFound : `https://image.tmdb.org/t/p/w500${result.backdrop_path}`} className="w-100 rounded"/></td>
            <td>{result.release_date}</td>
            <td>{result.popularity}</td>
            <td className='text-clamp-4-lines'>{!result.overview ? "Unknown for now" : result.overview }</td>
            <td>{index===-1 ? <button type="button" className="btn btn-sm btn-success" onClick={() => dispatch(addToFavourites(result)) }>Add to favourites</button> : 
            <RemoveButton title={"Remove from favourites"} movie={result}/>}</td>
        </tr>
    )
}
