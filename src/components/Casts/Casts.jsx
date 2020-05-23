import React from 'react';
import CastSliderItem from '../CastSliderItem/CastSliderItem'
// import Slider from "react-slick";
const Casts = ({ movieCast }) => {

    // const settings = {
    //     dots: true,
    //     fade: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 5
    //   };
    return (            
        <>
            {/* <Slider {...settings} > */}

            {movieCast && movieCast.map((item) => {
                console.log(item.poster);
                
                return (
                    <CastSliderItem name={item.name} poster={item.poster} character={item.character}/>
                )
            })}
            {/* </Slider> */}

        </>
    )

}

export default Casts