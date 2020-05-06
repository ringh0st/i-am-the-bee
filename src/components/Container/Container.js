import React from 'react';
import listOfMovies from '../listOfMovies/listOfMovies';
import MovieDetails from '../movieDetails/MovieDetails';
import HomePage from '../HomePage/HomePage';
// import TopMovies from '../TopMovies/TopMovies';
import { BrowserRouter, Route } from 'react-router-dom';



class Container extends React.Component {


    render(){
        return(
            <BrowserRouter>
                <Route path="/" exact component={HomePage}/>
                <Route path="/latest/page/:id" exact component={listOfMovies} />
                <Route path="/top/page/:id" component={listOfMovies} />
                <Route path="/moviedetails/:id" component={MovieDetails} />
            </BrowserRouter>
        )
    }

}
export default Container;