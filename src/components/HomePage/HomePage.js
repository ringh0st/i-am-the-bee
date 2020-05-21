import React from 'react';
import Carousel from '../Carousel/Carousel'
import {HomePageStyle} from '../HomePage/HomePageStyle.styles'
class HomePage extends React.Component {

    render() {

        return (
            <div className="home-page">
            <HomePageStyle/>
                <Carousel />
            </div>
        )
    }

}
export default HomePage;