import React from "react";
// import "../MoviePage/moviePage.css";
// import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
// import icon from '../../images/beeandtextlogo.png';
// import BackButton from '../../components/BackButton/BackButton';
// import Slider from '../Slider/Slider'
import Casts from '../Casts/Casts'
import { MoviePageContainer, BackDropImage, CastContainer, Trailer } from './MoviePageStyle.styles'
import BasicDetails from '../BasicDetails/BasicDetails'
import ExtraDetails from '../ExtraDetails/ExtraDetails'


const MoviePage = ({ id, title, poster, tmdbRating, year, imdbId, movie, movieCast }) => {
    const opts = {
        height: '500',
        width: '1000',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            //   autoplay: 1,
        }
    }
    let sectionStyle = {
        backgroundImage: `url("${movie.backgroundPic}")`
    };

    return (
        <>
            <MoviePageContainer>
                <BackDropImage style={sectionStyle}></BackDropImage>

                <BasicDetails movie={movie} />
                <ExtraDetails movie={movie} />
                <Trailer >
                    <YouTube videoId={movie.trailer1} opts={opts} />
                    {/* <YouTube videoId={movie.trailer2} opts={opts}/>
                        <YouTube videoId={movie.trailer3} opts={opts}/> */}
                </Trailer>
                        CAST: <br />
                <CastContainer>
                    {movieCast && <Casts movieCast={movieCast} />}
                </CastContainer>

            </MoviePageContainer>

        </>
    );
};
export default MoviePage;