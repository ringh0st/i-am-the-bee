import React from 'react';
import tmdb from '../../apis/tmdb';
import "../NowPlaying/NowPlaying.css";
import noPoster from '../../images/no-poster-available.png';
import MovieCard from '../MovieCard/MovieCard'
import { Link } from 'react-router-dom';
import icon from '../../images/beeandtextlogo.png';
// import Pagination from '../Pagination/Pagination';
// import Pagination from "react-js-pagination";

let currentDate = new Date().toISOString().split('T')[0];

class LatestMovies extends React.Component {


    state = {
        tmdbData: null,
        page: null,
        movieItems: null,
        total: null,
        totalPages: null,
        perPage: null,
        currentPage: null,
        pageNumbers: null,
        activePage: null,
        disabled: false,
        disabledNext:false
    };

    async componentDidMount() {
        let apiKey = "b0a20e995baa08cdd818c57bcd38ffd1";
        // console.log(currentPage);
        let currentPage = this.props.match.params.id;
        const response = await tmdb.get(`discover/movie?api_key=${apiKey}&vote_average.gte=5&with_original_language=en&language=en-US&sort_by=primary_release_date.desc&primary_release_date.lte=${currentDate}&include_adult=false&with_runtime.gte=60&include_video=false&page=${currentPage}`);
        this.setState({ tmdbData: response });
        let posterFunction = (x) => x !== null ? `https://image.tmdb.org/t/p/w500/${x}` : noPoster;
        let moviesArray = response.data.results;
        // let currentPage = response.data.page;
        console.log(currentPage);
        // const currentPage = this.props.match.params;

        this.setState({
            total: response.data.total_results,
            totalPages: response.data.total_pages,
            perPage: response.data.results.length,
            currentPage: currentPage
        })
        const pageNumbers = [];
        if (this.state.total !== null) {
            for (let i = 1; i <= Math.ceil(this.state.total / this.state.perPage); i++) {
                pageNumbers.push(i);
            }
        }

        this.setState({
            pageNumbers: pageNumbers
        })

        let years = (x) => {
            let y = x.split("-")
            return (y[0])
        }

        const movieItem = [];
        for (let i = 0; i < moviesArray.length; i++) {
            movieItem.push({
                title: moviesArray[i].title,
                releaseDate: moviesArray[i].release_date,
                poster: posterFunction(moviesArray[i].poster_path),
                tmdbRating: moviesArray[i].vote_average,
                year: years(moviesArray[i].release_date),
                tmdbId: moviesArray[i].id
            })
        }
        this.setState({ movieItems: [...movieItem] });

    }
    handleClick = (e) => {
        // console.log(e.target.value);
    }
    nextPage = (currentPage, disabledNext) => {
        let total = this.state.totalPages
        if (this.state.currentPage !== `${total}`) {
            disabledNext = this.state.disabledNext;
            currentPage = parseInt(this.state.currentPage) + 1
            this.props.history.push(`/latest/page/${currentPage}`);
            window.location.reload(false)
        }
        else {
            this.setState({ disabledNext: true });
        }
    }
    previousPage = (currentPage, disabled) => {
        if (this.state.currentPage !== `${1}`) {
            disabled = this.state.disabled;
            currentPage = parseInt(this.state.currentPage) - 1
            this.props.history.push(`/latest/page/${currentPage}`);
            window.location.reload(false)
        }
        else {
            this.setState({ disabled: true });
        }
    }

    render() {
        // const styleButton = {
        //     padding:props.padding
        // }
        // console.log(this.state.currentPage)
        return (
            <>
                <nav className="navbar">
                    <Link to={"/"} >
                        <img className="bee-icon" alt="icon" src={icon}></img>
                    </Link>
                </nav>
                <div className="now-playing">
                    {this.state.movieItems && this.state.movieItems.map((item, key) => {
                        return (
                            <MovieCard onClick={this.handleClick} tmdbId={item.tmdbId} key={key} year={item.year} title={item.title} releaseDate={item.releaseDate} poster={item.poster} tmdbRating={item.tmdbRating} />
                        );
                    })
                    }
                </div>
                <button onClick={this.previousPage} disabled={this.state.disabled} style={{fontSize:'20px'}}>&#10218;Previous</button>
                <button onClick={this.nextPage} disabled={this.state.disabledNext} style={{fontSize:'20px'}}>Next&#10219;</button>
                {/* <Pagination nextPage={this.nextPage}/> */}
            </>
        )
    }
}
export default LatestMovies