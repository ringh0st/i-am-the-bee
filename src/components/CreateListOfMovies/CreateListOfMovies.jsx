import React from 'react';
import { withRouter } from "react-router-dom";
import { tmdbLatestMovies, tmdbTopMovies,searchMovieName, tmdbGreatMovies } from '../../apis/tmdb'
import noPoster from '../../images/no-poster-available.png';
import Pagination from '../Pagination/Pagination';
import ListOfMovies from '../../components/ListOfMovies/ListOfMovies';
// import Carousel from '../Carousel/Carousel'
// import Search from '../Search/Search'


class CreateListOfMovies extends React.Component {

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
        api:null,
        searchValue:null,

    };


    async componentDidMount() {
        let pathName = this.props.location.state.type
        console.log(pathName);
        
        switch (pathName) {
            case "latest":
                this.setState({
                    tmdbData: await tmdbLatestMovies(1),
                    path: "latest",
                    api:tmdbLatestMovies
                });
                break;
            case "top":
                this.setState({
                    tmdbData: await tmdbTopMovies(1),
                    path: "top",
                    api:tmdbTopMovies
                });
                break;
            case "search":
                this.setState({
                    tmdbData: await searchMovieName(1, this.props.location.state.searchTerm),
                    path: `search/q=${this.props.location.state.searchTerm}`,
                    searchValue:this.props.location.state.searchTerm,
                    api:searchMovieName
                });
                break;
            case "revenue":
                this.setState({
                    tmdbData: await tmdbGreatMovies(1),
                    path: "revenue",
                    api:tmdbGreatMovies
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
        // console.log(moviesArray);
        

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
        // console.log(this.state.tmdbData);


    }

    handleClick = (data) => {
        this.setState({ tmdbData: data, updateState: true })
        console.log(data);
        
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
                {this.state.tmdbData && this.state.buttonsForPagination && <Pagination path={this.state.path} buttonsNumber={this.state.buttonsForPagination} data={this.state.tmdbData} api={this.state.api} handleData={this.handleClick} buttonsForPagination={this.state.buttonsForPagination} searchValue={this.state.searchValue} />}
                {isLoading && spinner()}
                    {this.state.movieItems && this.state.movieItems &&
                        <ListOfMovies movieItems={this.state.movieItems} handleClick={this.handleClick} />
                        }
                </>
        )
    }
}
export default withRouter(CreateListOfMovies);

