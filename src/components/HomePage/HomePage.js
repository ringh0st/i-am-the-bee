import React from 'react';
import NavBar from '../NavBar/NavBar'
// import Slider from 'react-slick';
import Carousel from '../Carousel/Carousel'
class HomePage extends React.Component {

    render() {

        return (
            <>
                <NavBar />
                <Carousel />
            </>
        )
    }

}
export default HomePage;