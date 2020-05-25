import React from "react";
// import "../MovieCard/movieCard.css"
import { Link } from 'react-router-dom';
// import MoviePage from "../MoviePage/MoviePage";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {MovieCardContainer,BackImage,MovieOverView, MovieCardPoster, MovieCardInner,MovieCardInfo, MovieTitle, MovieReleaseDate, MovieAvgVote, MoreButton,MovieRating, PosterContainer} from './MovieCardStyle.styled'
const MovieCard = ({ voteCount, overView,backPic, tmdbId, title, poster, tmdbRating, year, handleClick }) => {

  return (
    <> 
  <MovieCardContainer>
    <MovieCardInner>
    <PosterContainer>
      <MovieCardPoster alt={title} src={poster} ></MovieCardPoster>
      </PosterContainer>
      <MovieCardInfo>
      <MovieTitle>{title}</MovieTitle>
      <BackImage alt={title} src={backPic} ></BackImage>
              <Link onClick={handleClick} to={"/moviedetails/" + tmdbId} >

                <MoreButton className="more-details">More &ensp;
                <i className="fa fa-chevron-circle-right"></i>
                </MoreButton>
              </Link>
              <MovieReleaseDate>{year}</MovieReleaseDate>
              <MovieOverView>{overView}</MovieOverView>
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