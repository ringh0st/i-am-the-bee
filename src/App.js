import React from 'react';
// import './App.css';
import CreateMovieDetails from './components/CreateMovieDetails/CreateMovieDetails';
import HomePage from './components/HomePage/HomePage';
import CreateListOfMovies from "./components/CreateListOfMovies/CreateListOfMovies";
// import Container from './components/Container/Container'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
// import Search from './components/Search/Search';
// import SearchPage from './components/SearchPage/SearchPage'

function App() {
  return (
    <div>

          <BrowserRouter>
          <NavBar/> 
                <Route path="/" exact component={HomePage}/>
                <Route path="/revenue/page/:id" component={CreateListOfMovies}/>
                <Route path="/latest/page/:id" component={CreateListOfMovies} />
                <Route path="/top/page/:id" component={CreateListOfMovies} />
                <Route path="/moviedetails/:id" component={CreateMovieDetails} />
                <Route path="/search/:query/page/:id" component={CreateListOfMovies} />
            </BrowserRouter>
      {/* <Container /> */}
    </div>
  );
}

export default App;
