
import React from 'react';
import { BasicDetailsContainer, Title, Year, Genre, Director, Plot, BasicInfoContainer } from './BasicDetailsStyle.styles'

const BasicDetails = ({ movie }) => {

    return (
        <>
            <Title>{movie.title}</Title>

            <BasicDetailsContainer>
                <BasicInfoContainer>
                    <Year>Release year: {movie.year}</Year>
                    <Genre >{movie.genre}</Genre>
                    <Director>Director: {movie.director}</Director>
                </BasicInfoContainer>
                <Plot>Plot: {movie.overView}</Plot>
                {/* <div className="avg-vote">
            <i id='star' className='fa fa-star fa-fw'></i> */}
                {/* <div className="tmdbRating">{tmdbRating}</div> */}
                {/* </div> */}

            </BasicDetailsContainer>
        </>
    )
}
export default BasicDetails