import React from 'react';
import Slider from "react-slick";
import { tmdbGreatMovies } from '../../apis/tmdb'
import noPoster from '../../images/no-poster-available.png'
import '../Carousel/carousel.css'
import SliderItem from '../SliderItem/SliderItem'
class Carousel extends React.Component {
    state = {
        popularMovies: null,
        tmdbData: null,
        movieItems: [],
        updateState: true,

    }

    async componentDidMount() {
        this.setState({
            tmdbData: await tmdbGreatMovies(1),
        });
    }
    componentDidUpdate() {
        let posterFunction = (x) => x !== null ? `https://image.tmdb.org/t/p/w1280/${x}` : noPoster;
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
                    tmdbRating: popularMovies[i].vote_average,
                    year: years(popularMovies[i].release_date),
                })
            }
            console.log(movieItem);

            // this.setState({ movieItems: [...movieItem] });
            if (this.state.updateState) {
                this.setState({ movieItems: [...movieItem] });
                this.setState({ updateState: false })
                console.log(movieItem);

            }

        }

        
    } 
    handleClick = (data) => {
        this.setState({ tmdbData: data, updateState: true })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            autoplay: true,
            speed: 3000,
            autoplaySpeed: 8000,
            // cssEase: "linear",
            // centerMode: true,

        };

        return (
            <div className='carousel-container'>

                <Slider {...settings}>
                    {this.state.movieItems && this.state.movieItems.map(item => {
                        console.log(item.title);

                        return (
                            <SliderItem className="carousel-item"  onClick={this.handleClick} title={item.title} poster={item.poster} year={item.year}></SliderItem>
                        )
                    })}
                </Slider>

            </div>
        )
    }
}
export default Carousel;