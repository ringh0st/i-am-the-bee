import React from 'react';
import tmdb from '../../apis/tmdb';
import "../LatestMovies/LatestMovies.css";
import noPoster from '../../images/no-poster-available.png';
import MovieCard from '../MovieCard/MovieCard'
import { Link } from 'react-router-dom';
import icon from '../../images/beeandtextlogo.png';
import Pagination from '../Pagination/Pagination';
// import tmdbLatests from '../../apis/tmdb'
// import Pagination from "react-js-pagination";
let currentDate = new Date().toISOString().split('T')[0];
let tmdbLatest = async (page) => {
    const response = await tmdb.get(`discover/movie?api_key=${apiKey}&vote_average.gte=5&with_original_language=en&language=en-US&sort_by=primary_release_date.desc&primary_release_date.lte=${currentDate}&include_adult=false&with_runtime.gte=60&include_video=false&page=${page}`)
    return response.data;
}

let apiKey = "b0a20e995baa08cdd818c57bcd38ffd1";
// let currentPage = this.props.match.params.id;
class LatestMovies extends React.Component {
    


    state = {
        tmdbData: null,
        page: null,
        movieItems: null,
        // pageNumbers: null,
        activePage: null,
        disabled: false,
        disabledNext: false,
        updateState: true
    };

    async componentDidMount() {
        // 

        
        this.setState({ tmdbData: await tmdbLatest(1) });
    }
    componentDidUpdate() {

        let posterFunction = (x) => x !== null ? `https://image.tmdb.org/t/p/w1280/${x}` : noPoster;
        
        let moviesArray = this.state.tmdbData.results;        

        let years = (x) => {
            let y = x.split("-")
            return (y[0])
        }
        if (this.state.tmdbData) {
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

            if (this.state.updateState) {
                this.setState({ movieItems: [...movieItem] });
                this.setState({ updateState: false })

            }
            // console.log(this.state.movieItems);

        }



        // const paging = {
        //     total: this.state.tmdbData.data.total_results,
        //     totalPages: this.state.tmdbData.data.total_pages,
        //     perPage: this.state.tmdbData.data.results.length,
        //     currentPage: currentPage
        // }
        // this.setState({
        //     paging: paging
        // })
        // const pageNumbers = [];
        // if (this.state.total !== null) {
        //     for (let i = 1; i <= Math.ceil(this.state.total / this.state.perPage); i++) {
        //         pageNumbers.push(i);
        //     }
        // }

        // this.setState({
        //     pageNumbers: pageNumbers
        // })


    }
    // handleClick = (e) => {
    //     // 
    // }
    handleClick = (data) => {
        console.log(data);


        this.setState({ tmdbData: data, updateState: true })


    }

    render() {

        // const styleButton = {
        //     padding:props.padding
        // }
        // 
        return (
            <>

                <nav className="navbar">
                    <Link to={"/latest/page/1"} >
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
                {this.state.tmdbData && <Pagination data={this.state.tmdbData} api={tmdbLatest} handleData={this.handleClick} />}
            </>
        )
    }
}
export default LatestMovies