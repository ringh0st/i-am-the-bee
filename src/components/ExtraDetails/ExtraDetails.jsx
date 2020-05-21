import React from 'react';

import {ExtraDetailsContainer} from './ExtraDetailsStyle.styles'
const ExtraDetails = ({movie})=>{

    return(
        <ExtraDetailsContainer>
        <div>Run time: {movie.runtime}min</div>
        <div>Budget: {movie.budget}$</div>
        <div className="cast">awardss: {movie.awards}</div>
        {/* <div className="cast">cast: {movie.casts}</div> */}
        </ExtraDetailsContainer>
    )
}

export default ExtraDetails