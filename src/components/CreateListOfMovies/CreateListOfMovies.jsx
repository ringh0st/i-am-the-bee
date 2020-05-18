import React from 'react';
import { withRouter } from "react-router-dom";
// import "../ListOfMovies/ListOfMovies.css";
import { tmdbLatestMovies, tmdbTopMovies } from '../../apis/tmdb'
import noPoster from '../../images/no-poster-available.png';
// import MovieCard from '../MovieCard/MovieCard'
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
import ListOfMovies from '../ListOfMovies/ListOfMovies'
// import Carousel from '../Carousel/Carousel'

class listOfMovies extends React.Component {

    state = {
        tmdbData: null,
        page: null,
        movieItems: null,
        activePage: null,
        disabled: false,
        disabledNext: false,
        updateState: true,
        buttonsForPagination: null,
        path: null,
        winWidth: null,
        isLoading: false,

    };


    async componentDidMount() {
        // const { pathname } = this.props.location
        const pathName = this.props.location.state.type

        switch (pathName) {
            case "latest":
                this.setState({
                    tmdbData: await tmdbLatestMovies(1),
                    path: "latest"
                });
                break;
            case "top":
                this.setState({
                    tmdbData: await tmdbTopMovies(1),
                    path: "top"
                });
                break;
            default:
            //none
        }

        //put this in componentDidMount and trigger a render each time the window width changes in your componentDidUpdate
        this.setState({
            winWidth: ((window.innerWidth <= 800) && (window.innerHeight <= 600))
        })
        if (this.state.winWidth === false) {
            // console.log("this is a computer screen");
            this.setState({ buttonsForPagination: 5 })
        } else {
            this.setState({ buttonsForPagination: 3 })
        }


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
        }

    }

    handleClick = (data) => {
        this.setState({ tmdbData: data, updateState: true })
    }

    render() {
        const spinner = () => {
            return (
                <h1 >Preparing Files</h1>
            );
        };
        const { isLoading } = this.state;

        return (
            <>
                <NavBar />
                {this.state.tmdbData && this.state.buttonsForPagination && <Pagination path={this.state.path} buttonsNumber={this.state.buttonsForPagination} data={this.state.tmdbData} api={tmdbLatestMovies} handleData={this.handleClick} buttonsForPagination={this.state.buttonsForPagination} />}
                {isLoading && spinner()}
                    {this.state.movieItems && this.state.movieItems &&
                        <ListOfMovies movieItems={this.state.movieItems} handleClick={this.handleClick} />
                        }
                </>
        )
    }
}
export default withRouter(listOfMovies);

