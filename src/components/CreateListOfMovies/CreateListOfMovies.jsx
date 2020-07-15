import React from 'react';
import { withRouter } from "react-router-dom";
import { tmdbLatestMovies, tmdbTopMovies, tmdbGreatMovies } from '../../apis/tmdb'
import noPoster from '../../images/no-poster-available.png';
import Pagination from '../Pagination/Pagination';
import ListOfMovies from '../ListOfMovies/ListOfMovies';
import comingSoon from '../../images/comingsoon.jpg';
import Spinner from '../Spinner/Spinner';

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
        isLoading: true,
        api:null,
        searchValue:null,
        pathName:null

    };

    async componentDidMount() {
        // let pathName = this.props.location.state.type
        switch (this.props.location.state.type) {
            case "latest":
                this.setState({
                    tmdbData: await tmdbLatestMovies(1),
                    path: "latest",
                    api:tmdbLatestMovies,
                    isLoading: false,

                });
                break;
            case "top":
                this.setState({
                    tmdbData: await tmdbTopMovies(1),
                    path: "top",
                    api:tmdbTopMovies,
                    isLoading: false,

                });
                break;
            case "revenue":
                this.setState({
                    tmdbData: await tmdbGreatMovies(1),
                    path: "revenue",
                    api:tmdbGreatMovies,
                    isLoading: false,

                });
                break;
            default:
        }
    }

    componentDidUpdate() {
        
        let posterFunction = (x) => x !== null ? `https://image.tmdb.org/t/p/w1280/${x}` : noPoster;
        let backDropPic = (picPath) => picPath !== null ? `https://image.tmdb.org/t/p/w1280/${picPath}` : comingSoon

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
                    tmdbId: moviesArray[i].id,
                    backPic:backDropPic(moviesArray[i].backdrop_path),
                    voteCount:moviesArray[i].vote_count,
                    overView:moviesArray[i].overview,
                    popularity:moviesArray[i].popularity
                })
            }

            if (this.state.updateState) {
                this.setState({ movieItems: [...movieItem] });
                this.setState({ updateState: false })

            }
        }
        console.log(this.state.tmdbData);
    }

    handleClick = (data) => {
        this.setState({ tmdbData: data, updateState: true })
        
    }

    render() {
        const { isLoading } = this.state;
        return (
            <>
            {   }
                {this.state.tmdbData && this.state.buttonsForPagination && <Pagination path={this.state.path} buttonsNumber={this.state.buttonsForPagination} data={this.state.tmdbData} api={this.state.api} handleData={this.handleClick} buttonsForPagination={this.state.buttonsForPagination} searchValue={this.state.searchValue} />}
                {isLoading && <Spinner/>}
                    {this.state.movieItems && this.state.movieItems &&
                        <ListOfMovies movieItems={this.state.movieItems} handleClick={this.handleClick} />
                        }
                </>
        )
    }
}
export default withRouter(CreateListOfMovies);

