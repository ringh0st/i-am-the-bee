import React from 'react'
import { Link } from 'react-router-dom'

const SliderItem = ({ title, poster, year, tmdbId, handleClick }) => {

    return (
        <container className='slider-container'>
            <div className='slider-details'>

                <div className="slider-title" >{title}</div>
                <div className="slider-year">{year}</div>
                <Link onClick={handleClick} to={"/moviedetails/" + tmdbId} >

                    <div className="slider-more">More Details.. &ensp;
                    <i className="fa fa-chevron-circle-right"></i>
                    </div>
                </Link>
            </div>

            <img className='slider-img' alt={title} src={poster}></img>
        </container>
    )
}
export default SliderItem