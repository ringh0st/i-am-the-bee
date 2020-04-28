import React from 'react';
import LatestMovies from '../LatestMovies/LatestMovies';
import NowPlaying from '../NowPlaying/NowPlaying';
import MovieDetails from '../movieDetails/MovieDetails';
import { BrowserRouter, Route } from 'react-router-dom';


class HomePage extends React.Component {

    render(){
        return(
            <BrowserRouter>
                <Route path="/latest/page/:id" exact component={LatestMovies} />
                <Route path="/nowplaying" component={NowPlaying} />
                <Route path="/moviedetails/:id" component={MovieDetails} />
            </BrowserRouter>
        )
    }

}
export default HomePage;