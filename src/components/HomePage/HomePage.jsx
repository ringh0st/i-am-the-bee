import React from 'react';
import Carousel from '../Carousel/Carousel';
import {HomePageContainer} from './HomePageStyle.styles';
class HomePage extends React.Component {

    render() {

        return (
            <HomePageContainer>
                <Carousel />
            </HomePageContainer>
        )
    }

}
export default HomePage;