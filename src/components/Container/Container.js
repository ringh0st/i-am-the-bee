import React from 'react';
import LatestMovies from '../LatestMovies/LatestMovies';
import NowPlaying from '../NowPlaying/NowPlaying';
import MovieDetails from '../movieDetails/MovieDetails';
import HomePage from '../HomePage/HomePage'
import { BrowserRouter, Route } from 'react-router-dom';


class Container extends React.Component {

    render(){
        return(
            <BrowserRouter>
                <Route path="/" exact component={HomePage}/>
                <Route path="/latest/page/:id" exact component={LatestMovies} />
                <Route path="/nowplaying" component={NowPlaying} />
                <Route path="/moviedetails/:id" component={MovieDetails} />
            </BrowserRouter>
        )
    }

}
export default Container;