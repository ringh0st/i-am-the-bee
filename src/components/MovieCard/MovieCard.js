import React from "react";
// import "../MovieCard/movieCard.css"
import { Link } from 'react-router-dom';
// import MoviePage from "../MoviePage/MoviePage";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {MovieCardContainer, MovieCardPoster, MovieCardInner,MovieCardInfo, MovieTitle, MovieReleaseDate, MovieAvgVote, MoreButton,MovieRating, PosterContainer} from './MovieCardStyle.styled'
const MovieCard = ({ tmdbId, title, poster, tmdbRating, year, handleClick }) => {

  return (
    <> 
  <MovieCardContainer>
    <MovieCardInner>
    <PosterContainer>
      <MovieCardPoster alt={title} src={poster} ></MovieCardPoster>
      </PosterContainer>
      <MovieCardInfo>
      <MovieTitle>{title}</MovieTitle>
              <Link onClick={handleClick} to={"/moviedetails/" + tmdbId} >

                <MoreButton className="more-details">More &ensp;
                <i className="fa fa-chevron-circle-right"></i>
                </MoreButton>
              </Link>
              <MovieReleaseDate>{year}</MovieReleaseDate>
              <MovieAvgVote>
                <i id='star' className='fa fa-star fa-fw'></i>
                <MovieRating className="tmdbRating">{tmdbRating}</MovieRating>
              </MovieAvgVote>
        
      </MovieCardInfo>
      </MovieCardInner>
  </MovieCardContainer>
    </>
  );
};
export default MovieCard;