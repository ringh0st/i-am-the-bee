import React from "react";
// import "../MovieCard/movieCard.css"
import { Link } from 'react-router-dom';
// import MoviePage from "../MoviePage/MoviePage";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { MovieCardContainer, MovieCoverInfo, MovieCoverInfoContainer, MovieCardOfficialPoster, BackImage, MovieOverView, MovieCardPoster, MovieCardInner, MovieCardBack, MovieTitle, MovieReleaseDate, MovieAvgVote, MoreButton, MovieRating, PosterContainer } from './MovieCardStyle.styled'
const MovieCard = ({ voteCount, overView, backPic, tmdbId, title, poster, tmdbRating, year, handleClick }) => {

  return (
    <>
      <MovieCardContainer>
        <MovieCardInner>
          <PosterContainer>
            <MovieCardPoster alt={title} src={poster} ></MovieCardPoster>
          </PosterContainer>
          
          <MovieCardBack>
            <BackImage alt={title} src={backPic} ></BackImage>
            <Link onClick={handleClick} to={"/moviedetails/" + tmdbId} >

              <MoreButton>FOR MORE &ensp;
                <i className="fa fa-chevron-circle-right"></i>
              </MoreButton>
            </Link>
            <MovieReleaseDate>{year}</MovieReleaseDate>
            <div>
            <MovieCardOfficialPoster alt={title} src={poster}></MovieCardOfficialPoster>

            <MovieOverView>OVERVIEW:"{overView}"
            </MovieOverView>
            </div>

            <MovieAvgVote>
              <i id='star' className='fa fa-star fa-fw'></i>
              <MovieRating className="tmdbRating">{tmdbRating}</MovieRating>
            </MovieAvgVote>
            <MovieCoverInfoContainer>
              <MovieCoverInfo>{title} © {year} Package Design and Supplementary Material Compilation © TMDB and OMDB api Inc. Distributed by Rinat Nadav Entertainment, 1985, Dakar St. Rosh HaAyin 4802560 IL, All rights reserved.</MovieCoverInfo>

            </MovieCoverInfoContainer>
          </MovieCardBack>
          <MovieTitle>{title}</MovieTitle>

        </MovieCardInner>

      </MovieCardContainer>
    </>
  );
};
export default MovieCard;