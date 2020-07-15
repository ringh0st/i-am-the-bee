import React from "react";
// import './App.css';
import CreateMovieDetails from "./components/CreateMovieDetails/CreateMovieDetails";
import HomePage from "./components/HomePage/HomePage";
import CreateListOfMovies from "./components/CreateListOfMovies/CreateListOfMovies";
import SearchList from "./components/SearchList/SearchList";

// import Container from './components/Container/Container'
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { setMovieData } from "./apis/tmdb";

// import Search from './components/Search/Search';
// import SearchPage from './components/SearchPage/SearchPage'

class App extends React.Component {
  state = {
    movieData: null,
    pathType: null,
  };
  getMovieData = async (value) => {
    let data = null;
    if (this.state.pathType) {
      console.log("in getMovieData: pathType", this.state.pathType);
      data = await setMovieData(this.state.pathType, value);
      this.setState({ movieData: data });
    }
  };
  setPathType = (type, value) => {
    console.log("in app set path type", type);
    this.setState({ pathType: type }, () => {
      this.getMovieData(value);
    });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavBar setPathType={this.setPathType} />
          <Route path="/" exact component={HomePage} />
          <Route path="/revenue/page/:id" component={CreateListOfMovies} />
          <Route path="/latest/page/:id" component={CreateListOfMovies} />
          <Route path="/top/page/:id" component={CreateListOfMovies} />
          <Route path="/moviedetails/:id" component={CreateMovieDetails} />
          <Route path="/search/:query/page/:id">
            <SearchList data={this.state.movieData} />
          </Route>
        </BrowserRouter>
        {/* <Container /> */}
      </div>
    );
  }
}

export default App;
