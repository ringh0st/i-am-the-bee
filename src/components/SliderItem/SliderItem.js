import React from 'react'
import { Link } from 'react-router-dom'
// import MovieReviews from '../MovieReviews/MovieReviews'

const SliderItem = ({ title, poster, year, tmdbId, handleClick }) => {

    return (
        <div className='slider-container'>
            <div className='slider-details'>

                <div className="slider-title" >{title}</div>
                <div className="slider-year">{year}</div>
                <Link  className="slider-more"onClick={handleClick} to={"/moviedetails/" + tmdbId} >
                    <div >More ..     &ensp;
                    <i className="fa fa-chevron-circle-right"></i>
                    </div>
                </Link>
            </div>

            <img className='slider-img' alt={title} src={poster}></img>

        </div>
    )
}
export default SliderItem