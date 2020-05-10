import React from 'react'
import {Link} from 'react-router-dom'

const SliderItem = ({title,poster,year,tmdbId, handleClick})=>{

    return(
        <container className='slider-container'>
                        <Link onClick={handleClick} to={"/moviedetails/" + tmdbId} >

              <div className="more-details">More Details.. &ensp;
              <i className="fa fa-chevron-circle-right"></i>
              </div>
            </Link>
            <div className="slider-title" >{title}</div>
            <div className="slider-year">{year}</div>
            <img className='slider-img' alt={title} src={poster}></img>
        </container>
    )
}
export default SliderItem