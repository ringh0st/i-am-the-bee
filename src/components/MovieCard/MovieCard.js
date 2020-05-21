import React from "react";
import "../MovieCard/movieCard.css"
import { Link } from 'react-router-dom';
// import MoviePage from "../MoviePage/MoviePage";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const MovieCard = ({ tmdbId, title, poster, tmdbRating, year, handleClick }) => {

  return (
    <>


      <div className="container">
        <div className="movie-card">
          {/* <Link onClick={handleClick} to={"/moviedetails/" + tmdbId} > */}
          {/* <div style={{backgroundColor:'grey'}}>           */}
          <img className="poster" alt={title} src={poster}></img>

          {/* <div style={{color:'white'}}>{title}</div> */}
          {/* </div> */}
          {/* </Link> */}
          <div className="movie-card-hover">
            <div className="movie-title">{title}</div>
            <Link onClick={handleClick} to={"/moviedetails/" + tmdbId} >

              <div className="more-details">More &ensp;
              <i className="fa fa-chevron-circle-right"></i>
              </div>
            </Link>
            <div className="release-date">{year}</div>
            <div className="avg-vote">
              <i id='star' className='fa fa-star fa-fw'></i>
              <div className="tmdbRating">{tmdbRating}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieCard;