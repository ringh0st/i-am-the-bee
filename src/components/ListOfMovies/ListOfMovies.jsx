import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import {ListOfMoviesContainer} from './ListOfMoviesStyle.styles'
const ListOfMovies = ({movieItems, handleClick})=>{

    return(
        <ListOfMoviesContainer>
        {movieItems.map(item => {
            return (
                <MovieCard className="grid-item" voteCount={item.voteCount}overView={item.overView}onClick={handleClick} backPic={item.backPic}tmdbId={item.tmdbId} key={item.tmdbId} year={item.year} title={item.title} releaseDate={item.releaseDate} poster={item.poster} tmdbRating={item.tmdbRating} />
            );
        })
        }
    </ListOfMoviesContainer>
    )
}
export default ListOfMovies