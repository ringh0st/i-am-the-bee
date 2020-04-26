import React from 'react';
import tmdb from '../../apis/tmdb';
import omdb from '../../apis/omdb';
// import movieItem from '../LatestMovies/LatestMovies';
import MoviePage from '../MoviePage/MoviePage';
import noPoster from '../../images/no-poster-available.png';
// import maleProfile from '../../images/MaleProfile.png';
import comingSoon from '../../images/comingsoon.jpg';
import noProfilePic from '../../images/noProfilepic.jpeg';

class MovieDetails extends React.Component {

    state = {
        imdbId: null,
        movie: {},
        movieCast: [],
        isLoading: false
    };
    async componentDidMount() {
        // const omdbRes = await omdb.get(`i=${movieById.data.imdb_id}`);
        // console.log(omdbRes);
        const omdb_key = "bc901512&i";
        const tmdb_key = "b0a20e995baa08cdd818c57bcd38ffd1";
        this.setState({ isLoading: true });
        const { id } = this.props.match.params
        const movieById = await tmdb.get(`movie/${id}?${tmdb_key}&language=en-US&include_video=true`);
        const imdbId = await movieById.data.imdb_id;
        const trailer = await tmdb.get(`movie/${imdbId}/videos?${tmdb_key}&language=en-US`);
        const omdbRes = await omdb.get(`?${omdb_key}=${imdbId}`);
        const peoplesId = await tmdb.get(`movie/${id}/credits?${tmdb_key}&language=en-US`)
        // console.log(omdbRes);
        // console.log(movieById);
        // console.log(peoplesId);
        console.log(trailer);

        const castArr = peoplesId.data.cast
        let castProfilePic = (picPath) => picPath !== null ? `https://image.tmdb.org/t/p/w200/${picPath}` : noProfilePic;

        this.setState({ imdbId: imdbId });
        const movieCast = [];
        for (let i = 0; i < castArr.length; i++) {
            movieCast.push({
                poster: castProfilePic(castArr[i].profile_path),
                name: castArr[i].name,
                character: castArr[i].character
            })
        }
        console.log(movieCast);
        this.setState({ movieCast: [...movieCast] });
        let years = (x) => {
            let y = x.split("-")
            return (y[0])
        }
        const trailerArr = trailer.data.results;
        let posterFunction = (x) => x !== null ? `https://image.tmdb.org/t/p/w500/${x}` : noPoster;
        let trailerFunction = (trailerArr) => trailerArr.length !== 0 ? trailerArr[0].key : comingSoon;
        const movie = {
            title: movieById.data.title,
            year: years(movieById.data.release_date),
            poster: posterFunction(movieById.data.poster_path),
            budget: movieById.data.budget,
            runtime: movieById.data.runtime,
            overView: movieById.data.overview,
            casts: omdbRes.data.Actors,
            awards: omdbRes.data.Awards,
            genre: omdbRes.data.Genre,
            trailer1: trailerFunction(trailerArr),
            director: omdbRes.data.Director
            // trailer2:trailer.data.results[1].key,
            // trailer3:trailer.data.results[2].key

        }
        this.setState({ movie: movie, isLoading: false })
        // console.log(movie.trailer);


    }
    render() {
        const spinner = () => {
            return (
                <div class="ui segment">
                    <div class="ui active dimmer">
                        <div class="ui large text loader">Preparing Files</div>
                    </div>
                    <p></p>
                </div>
            );
        };
        const { isLoading } = this.state;
        return (
            <>
                {isLoading && spinner()}
                <MoviePage imdbId={this.state.imdbId} movie={this.state.movie} movieCast={this.state.movieCast} />

            </>
        )
    }


}

export default MovieDetails