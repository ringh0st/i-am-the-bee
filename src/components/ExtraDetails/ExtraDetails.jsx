import React from 'react';

import {ExtraDetailsContainer,RunTime,Budget,Awards} from './ExtraDetailsStyle.styles'
const ExtraDetails = ({movie})=>{
    console.log(movie);
    
    return(
        <ExtraDetailsContainer>
        <RunTime>Run time: {movie.runtime}min</RunTime>
        <Budget>Budget: {movie.budget}$</Budget>
        <Awards>Awards: {movie.awards}</Awards>
        {/* <div className="cast">cast: {movie.casts}</div> */}
        </ExtraDetailsContainer>
    )
}

export default ExtraDetails