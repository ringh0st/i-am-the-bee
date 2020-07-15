import React from "react";
import equal from "fast-deep-equal";
import { withRouter } from "react-router-dom";

import noPoster from "../../images/no-poster-available.png";
import Pagination from "../Pagination/Pagination";
import ListOfMovies from "../ListOfMovies/ListOfMovies";
import comingSoon from "../../images/comingsoon.jpg";
import Spinner from "../Spinner/Spinner";
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
    isLoading: true,
    api: null,
    searchValue: null,
    pathName: this.props.location.state.type,
  };
  posterFunction = (x) =>
    x !== null ? `https://image.tmdb.org/t/p/w1280/${x}` : noPoster;
  backDropPic = (picPath) =>
    picPath !== null
      ? `https://image.tmdb.org/t/p/w1280/${picPath}`
      : comingSoon;

  years = (x) => {
    let y = x.split("-");
    return y[0];
  };
  createList = () => {
    if (this.state.tmdbData) {
      const moviesArray = this.state.tmdbData.results;
      const movieItems = [];
      for (let i = 0; i < moviesArray.length; i++) {
        movieItems.push({
          title: moviesArray[i].title,
          releaseDate: moviesArray[i].release_date,
          poster: this.posterFunction(moviesArray[i].poster_path),
          tmdbRating: moviesArray[i].vote_average,
          year: this.years(moviesArray[i].release_date),
          tmdbId: moviesArray[i].id,
          backPic: this.backDropPic(moviesArray[i].backdrop_path),
          voteCount: moviesArray[i].vote_count,
          overView: moviesArray[i].overview,
          popularity: moviesArray[i].popularity,
        });
      }
      return movieItems;

      //   if (this.state.updateState) {
      //     this.setState({ movieItems: [...movieItem] });
      //     this.setState({ updateState: false });
      //   }
    }
  };
  componentDidMount() {
    //put this in componentDidMount and trigger a render each time the window width changes in your componentDidUpdate
    this.setState({
      winWidth: window.innerWidth <= 800 && window.innerHeight <= 600,
    });
    if (this.state.winWidth === false) {
      this.setState({ buttonsForPagination: 5 });
    } else {
      this.setState({ buttonsForPagination: 3 });
    }
  }
  updateData = () => {
    if (this.props.data) {
      const { tmdbData, path, api, isLoading } = this.props.data;
      this.setState(
        {
          tmdbData: tmdbData,
          path: path,
          api: api,
          isLoading: isLoading,
        },
        () => {
          this.setState({ movieItems: [...this.createList()] });
        }
      );
    }
  };
  componentWillMount() {
    this.updateData();
  }
  componentDidUpdate() {
    if (!equal(this.state.tmdbData, this.props.data.tmdbData)) {
      this.updateData();
    }
  }

  handleClick = (data) => {
    this.setState({ tmdbData: data, updateState: true });
  };

  render() {
    const { isLoading } = this.state;

    return (
      <>
        {this.state.tmdbData && this.state.buttonsForPagination && (
          <Pagination
            path={this.state.path}
            buttonsNumber={this.state.buttonsForPagination}
            data={this.state.tmdbData}
            api={this.state.api}
            handleData={this.handleClick}
            buttonsForPagination={this.state.buttonsForPagination}
            searchValue={this.state.searchValue}
          />
        )}
        {isLoading && <Spinner />}
        {this.state.movieItems && (
          <ListOfMovies
            movieItems={this.state.movieItems}
            handleClick={this.handleClick}
          />
        )}
      </>
    );
  }
}
export default withRouter(CreateListOfMovies);
