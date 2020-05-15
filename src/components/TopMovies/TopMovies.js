import React from 'react';
// import LatestMovies from '../LatestMovies/LatestMovies'

class TopMovies extends React.Component{
    

    handleClick=()=>{
        console.log('The link was clicked.');
    }
    render(){
        return(
            <>
            <button onClick={this.handleClick}>TopMovies</button>
            {/* <LatestMovies /> */}
            </>
        )
    }
}
export default TopMovies;