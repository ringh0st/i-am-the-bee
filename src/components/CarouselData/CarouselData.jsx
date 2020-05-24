import React from 'react';
import Slider from "react-slick";
import { tmdbGreatMovies } from '../../apis/tmdb'
import noPoster from '../../images/no-poster-available.png'
import '../Carousel/carousel.css'
import SliderItem from '../SliderItem/SliderItem'
import Carousel from '../Carousel/Carousel'
class CarouselData extends React.Component {
    state = {
        popularMovies: null,
        tmdbData: null,
        movieItems: [],
        updateState: true,
        randomArray:null,

    }

    async componentDidMount() {
        this.setState({
            tmdbData: await tmdbGreatMovies(2),
        });
    }
    componentDidUpdate() {
        let posterFunction = (x) => x !== null ? `https://image.tmdb.org/t/p/original/${x}` : noPoster;
        let popularMovies = this.state.tmdbData.results;
        console.log(popularMovies);

        let years = (x) => {
            let y = x.split("-")
            return (y[0])
        }
        if (this.state.tmdbData) {
            const movieItem = [];
            for (let i = 0; i < popularMovies.length; i++) {
                movieItem.push({
                    title: popularMovies[i].title,
                    poster: posterFunction(popularMovies[i].backdrop_path),
                    year: years(popularMovies[i].release_date),
                    tmdbId: popularMovies[i].id
                })
            }
            let randomArray = [];
            for (let i = 0; i < 5; i++) {
                randomArray[i]=movieItem[Math.floor(Math.random()*movieItem.length)]
            }
            console.log(randomArray);

            // this.setState({ movieItems: [...movieItem] });
            if (this.state.updateState) {
                this.setState({ movieItems: [...movieItem] });
                this.setState({randomArray:[...randomArray]})
                this.setState({ updateState: false })
                

            }

        }

        
    } 
    handleClick = (data) => {
        this.setState({ tmdbData: data, updateState: true })
    }
    
    render() {

        return (
            <Carousel moviesarray={this.state.randomArray} onClick={this.handleClick}> </Carousel>
        )
    }
}
export default CarouselData;