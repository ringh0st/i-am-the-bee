import React from 'react';
import "./listOfMovies.css";
import {tmdbLatestMovies, tmdbTopMovies} from '../../apis/tmdb'
import noPoster from '../../images/no-poster-available.png';
import MovieCard from '../MovieCard/MovieCard'
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
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
        path:null,
    };


    async componentDidMount() { 
        const { pathname } = this.props.location
        console.log(pathname);
        
        if (pathname === "/latest/page/1"){
            this.setState({ 
                tmdbData: await tmdbLatestMovies(1),
                path:"latest"
             });
        } else {
            this.setState({ 
                tmdbData: await tmdbTopMovies(1),
                path:"top"
             })
            // console.log("j"); 

        }
        function detectMob() {
            // console.log(window.innerHeight);
            return ((window.innerWidth <= 800) && (window.innerHeight <= 600));
        }
        if (detectMob() === false) {
            // console.log("this is a computer screen");
            return this.setState({ buttonsForPagination: 5 })
        }else{
            return this.setState({ buttonsForPagination: 3 })  
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
        if (this.state.tmdbData ) {
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
        // const styleButton = {
        //     padding:props.padding
        // }
        return (
            <>
                <NavBar/>
                {/* <Carousel /> */}

                {this.state.tmdbData && this.state.buttonsForPagination && <Pagination path={this.state.path} buttonsNumber={this.state.buttonsForPagination} data={this.state.tmdbData} api={tmdbLatestMovies} handleData={this.handleClick} buttonsForPagination={this.buttonsForPagination} />}

                    <div className="grid-container">
                        {this.state.movieItems && this.state.movieItems.map((item) => {
                            return (
                                    <MovieCard className="grid-item" onClick={this.handleClick} tmdbId={item.tmdbId} key={item.id} year={item.year} title={item.title} releaseDate={item.releaseDate} poster={item.poster} tmdbRating={item.tmdbRating} />
                            );
                        })
                        }
                    </div>
            </>
        )
    }
}
export default listOfMovies