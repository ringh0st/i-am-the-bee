import React from 'react';
import omdb from '../../apis/omdb';
import MoviePage from '../MoviePage/MoviePage';
import noPoster from '../../images/no-poster-available.png';
import comingSoon from '../../images/comingsoon.jpg';
import noProfilePic from '../../images/noProfilepic.jpeg';
import {fetchMovieById, fetchMovieTrailer, fetchPeoplesId} from '../../apis/tmdb';

class MovieDetails extends React.Component {

    state = {
        imdbId: null,
        movie: {},
        movieCast: [],
        isLoading: false,
        fetchMovieById: null,
        fetchMovieTrailer:null,
        fetchPeoplesId:null

    };
    async componentDidMount() {
        const { id } = this.props.match.params
        console.log(id);
        console.log(fetchMovieById(id));
        
        
        this.setState({ 
            fetchMovieById: await fetchMovieById(id),
            fetchPeoplesId: await fetchPeoplesId(id)
        });
    
        const omdb_key = "bc901512";
        this.setState({ 
            isLoading: true,
            imdbId:this.state.fetchMovieById.imdb_id,
        });
        

        const omdbRes = await omdb.get(`?apikey=${omdb_key}&i=${this.state.imdbId}`);
        const castArr = this.state.fetchPeoplesId.cast
        this.setState({
            fetchMovieTrailer:await fetchMovieTrailer(this.state.imdbId)
        })
        let castProfilePic = (picPath) => picPath !== null ? `https://image.tmdb.org/t/p/w200/${picPath}` : noProfilePic;
        let backDropPic = (picPath) => picPath !== null ? `https://image.tmdb.org/t/p/w1280/${picPath}` : comingSoon
        const movieCast = [];
        for (let i = 0; i < castArr.length; i++) {
            movieCast.push({
                poster: castProfilePic(castArr[i].profile_path),
                name: castArr[i].name,
                character: castArr[i].character
            })
        }

        this.setState({ movieCast: [...movieCast] });
        let years = (x) => {
            let y = x.split("-")
            return (y[0])
        }
        console.log(this.state.fetchMovieTrailer);

        const trailerArr = this.state.fetchMovieTrailer.results;
        let posterFunction = (x) => x !== null ? `https://image.tmdb.org/t/p/w500/${x}` : noPoster;
        let trailerFunction = (trailerArr) => trailerArr.length !== 0 ? trailerArr[0].key : comingSoon;

        const movie = {
            title: this.state.fetchMovieById.title,
            year: years(this.state.fetchMovieById.release_date),
            poster: posterFunction(this.state.fetchMovieById.poster_path),
            budget: this.state.fetchMovieById.budget,
            runtime: this.state.fetchMovieById.runtime,
            overView: this.state.fetchMovieById.overview,
            casts: omdbRes.data.Actors,
            awards: omdbRes.data.Awards,
            genre: omdbRes.data.Genre,
            trailer1: trailerFunction(trailerArr),
            director: omdbRes.data.Director,
            backgroundPic:backDropPic(this.state.fetchMovieById.backdrop_path)
            // trailer2:trailer.data.results[1].key,
            // trailer3:trailer.data.results[2].key

        }
        this.setState({ movie: movie, isLoading: false })


    }
    render() {
        const spinner = () => {
            return (
                <div className="ui segment">
                    <div className="ui active dimmer">
                        <div className="ui large text loader">Preparing Files</div>
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