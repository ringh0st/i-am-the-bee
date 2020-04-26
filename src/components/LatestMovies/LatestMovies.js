import React from 'react';
import tmdb from '../../apis/tmdb';
import "../NowPlaying/NowPlaying.css";
import noPoster from '../../images/no-poster-available.png';
import MovieCard from '../MovieCard/MovieCard'

let currentDate = new Date().toISOString().split('T')[0];

class LatestMovies extends React.Component {


    state = {
        tmdbData: null,
        page: null,
        movieItems: null,
    };

    async componentDidMount() {
        const response = await tmdb.get(`discover/movie?api_key=b0a20e995baa08cdd818c57bcd38ffd1&vote_average.gte=5&with_original_language=en&language=en-US&sort_by=primary_release_date.desc&primary_release_date.lte=${currentDate}&include_adult=false&with_runtime.gte=60&include_video=false&page=1`);        
        this.setState({ tmdbData: response });

        
        let posterFunction = (x) => x !== null ? `https://image.tmdb.org/t/p/w500/${x}` : noPoster;
        let moviesArray = response.data.results;

        let years = (x) => {
            let y = x.split("-")
            return(y[0])
        }

        const movieItem = [];
        for (let i = 0; i < moviesArray.length; i++) {
            movieItem.push({
                title: moviesArray[i].title,
                releaseDate: moviesArray[i].release_date,
                poster: posterFunction(moviesArray[i].poster_path),
                tmdbRating: moviesArray[i].vote_average,
                year:years(moviesArray[i].release_date),
                tmdbId:moviesArray[i].id
            })
        }
        this.setState({ movieItems: [...movieItem] });

    }
    handleClick=(e) =>{
        console.log(e.target.value);
      }
    render() {
        // const styleButton = {
        //     padding:props.padding
        // }

        
        return (
            <>
                <div className="now-playing">
                    {this.state.movieItems && this.state.movieItems.map((item, key) => {
                        return (
                            <MovieCard onClick={this.handleClick} tmdbId={item.tmdbId} key={key} year={item.year} title={item.title} releaseDate={item.releaseDate} poster={item.poster} tmdbRating={item.tmdbRating} />
                        );
                    })
                    }

                </div>
            </>
        )
    }
}
export default LatestMovies