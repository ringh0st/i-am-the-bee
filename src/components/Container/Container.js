import React from 'react';
// import listOfMovies from '../listOfMovies/listOfMovies';
import CreateMovieDetails from '../CreateMovieDetails/CreateMovieDetails';
import HomePage from '../HomePage/HomePage';
import CreateListOfMovies from "../CreateListOfMovies/CreateListOfMovies";
// import TopMovies from '../TopMovies/TopMovies';
import { BrowserRouter, Route } from 'react-router-dom';
// import SearchPage from '../SearchPage/SearchPage'


class Container extends React.Component {


    render(){
        return(
            //look at my code and see that my navbar is outside of the router
            <BrowserRouter>
                <Route path="/" exact component={HomePage}/>
                <Route path="/latest/page/:id" component={CreateListOfMovies} />
                <Route path="/top/page/:id" component={CreateListOfMovies} />
                <Route path="/moviedetails/:id" component={CreateMovieDetails} />
                {/* <Route path="/search/:movie" component={SearchPage} /> */}
            </BrowserRouter>
        )
    }

}
export default Container;