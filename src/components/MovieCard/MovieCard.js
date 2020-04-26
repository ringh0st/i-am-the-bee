import React from "react";
import "../MovieCard/movieCard.css"
import { Link } from 'react-router-dom';
// import MoviePage from "../MoviePage/MoviePage";

const MovieCard = ({tmdbId, title, poster, tmdbRating, year, handleClick}) => {

  return (
    <>
      <div className="container">
        <div className="movie-card">
          <Link onClick={handleClick} to={"/moviedetails/"+tmdbId} >
          <img className="poster" alt={title} src={poster}></img>
          </Link>
          <div className="movie-title">{title}</div>
          <div className="release-date">{year}</div>
          <div className="avg-vote">
            <i id='star' className='fa fa-star fa-fw'></i>
            <div className="tmdbRating">{tmdbRating}</div>
          </div>
        </div>
      </div>

    </>
  );
};
export default MovieCard;