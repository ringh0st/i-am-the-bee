import React from "react";
import "../MoviePage/moviePage.css";
// import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
// import icon from '../../images/beeandtextlogo.png';
import BackButton from '../../components/BackButton/BackButton';
// import Slider from '../Slider/Slider'



const MoviePage = ({ id, title, poster, tmdbRating, year, imdbId, movie , movieCast}) => {
    const opts = {
        height: '240',
        width: '400',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        //   autoplay: 1,
        }
    }
    let sectionStyle = {
        // width: "100%",
        // height: "400px",
        backgroundImage: `url("${movie.backgroundPic}")`
      };
      
    return (
        <>
            <div className="container">
                <div style={sectionStyle}className="header">
                    {/* <div className="poster-container"><img className="poster-item" alt={title} src={movie.poster}></img></div> */}
                    
                    <div className="movie-main-info">

                        <div className="title">{movie.title}</div>
                        <div className="year">Release year: {movie.year}</div>
                        <div className="over-view">{movie.genre}</div>
                        <div>Director: {movie.director}</div>
                        <div className="over-view">Plot: {movie.overView}</div>
                        {/* <div className="avg-vote"> */}
                        {/* <i id='star' className='fa fa-star fa-fw'></i>
            <div className="tmdbRating">{tmdbRating}</div> */}
                        {/* </div> */}
                        
                    </div>
                    <BackButton/>
                </div>
                <div className="mainPage">
                    <div>Run time: {movie.runtime}min</div>

                    <div>Budget: {movie.budget}$</div>
                    <div className="cast">awards: {movie.awards}</div>
                    <div className="cast">cast: {movie.casts}</div>
                    <div className="trailers">
                        <YouTube videoId={movie.trailer1} opts={opts}/>
                        {/* <YouTube videoId={movie.trailer2} opts={opts}/>
                        <YouTube videoId={movie.trailer3} opts={opts}/> */}
                        </div>
                        CAST: <br/>
                    <div className="cast">
                    {movieCast && movieCast.map((item) => {
                        return (
                            <div className="actor" key={item.id}>
                        <img className="actor-pic"alt={item.id} src={item.poster}></img>
                        <div className="actor-name">{item.name}</div>
                        <div className="character">{item.character}</div>
                        </div>
                        )
                    })}
                    </div>
                    {/* <Slider cards={movieCast}/> */}

                </div>

            </div>

        </>
    );
};
export default MoviePage;