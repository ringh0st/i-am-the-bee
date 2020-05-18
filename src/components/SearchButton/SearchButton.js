
import React from 'react';
import CustomButton from '../CostomButton/CustomButton';
import { SearchContainer } from '../SearchButton/SearchButtonStyle.Styles'
import Input from '../Input/Input';
import { searchMovieName } from '../../apis/tmdb';
import MovieCard from '../MovieCard/MovieCard';

class SearchButton extends React.Component {
    state = {
        // search:'Level Up',
        tmdbData: null,
        searchTerm: "",
        placeholder: "Search for..",
        moviesResults: null

    }


    updateSearch = (e) => {
        this.setState({ searchTerm: e.target.value })
        // console.log(e.target.value);

    }
    async componentDidUpdate(prevState) {
        console.log("previous", prevState);

        this.setState({
            tmdbData: await searchMovieName(this.state.searchTerm),
        })

        // console.log();
        let array = this.state.tmdbData.results
        let moviesResults = [];
        for (let i = 0; i < this.state.tmdbData.results.length; i++) {
            moviesResults.push({
                title: array[i].title,
                tmdbId: array[i].tmdb_id,
                // poster:array[i].poster, 

            })
        }
        this.setState({ moviesResults: [...moviesResults] })
    }

    render() {
        // let findMovie= this.props.movies.filter(
        //    movie =>{
        //     return movie.title.toLowerCase().indexOf(this.state.searchTerm) !== -1;
        //    } 
        // )
        return (
            <>
                <SearchContainer primary>
                    <CustomButton value={this.state.searchTerm} ></CustomButton>
                    <Input
                        placeholder={this.state.placeholder}
                        value={this.state.searchTerm}
                        updateSearch={this.updateSearch}
                    />
                </SearchContainer>
                {this.state.moviesResults && this.state.moviesResults.map(item => {
                    return (
                        <MovieCard tmdbId={item.tmdbId} title={item.title} tmdbRating={item.tmdbRating} year={item.year} handleClick={item.handleClick} />
                    )
                })}
            </>
        )
    }
}

export default SearchButton