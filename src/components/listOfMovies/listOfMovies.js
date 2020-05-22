import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import '../ListOfMovies/ListOfMovies.css';
const ListOfMovies = ({movieItems, handleClick})=>{

    return(
        <div className="grid-container">
        {movieItems.map(item => {
            return (
                <MovieCard className="grid-item" onClick={handleClick} tmdbId={item.tmdbId} key={item.tmdbId} year={item.year} title={item.title} releaseDate={item.releaseDate} poster={item.poster} tmdbRating={item.tmdbRating} />
            );
        })
        }
    </div>
    )
}
export default ListOfMovies