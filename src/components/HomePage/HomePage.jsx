import React from 'react';
import Carousel from '../Carousel/Carousel';
import {HomePageContainer} from './HomePageStyle.styles';
import Spinner from '../Spinner/Spinner'
class HomePage extends React.Component {

    render() {

        return (
            <HomePageContainer>
                <Carousel />
                {/* <Spinner/> */}
            </HomePageContainer>
        )
    }

}
export default HomePage;