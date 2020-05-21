
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { SearchContainer } from './SearchStyle.Styles'
import Input from '../Input/Input';
import Button from '../Button/Button';
import { withRouter } from 'react-router'



class Search extends React.Component {
    state = {
        tmdbData: null,
        searchTerm: "",
        placeholder: "Search for..",
        moviesResults: null,
        isClean: false

    }

    async componentDidUpdate() {
        if(this.state.isClean){
            this.setState({
                searchTerm: "",
                isClean: false
            })
        }

        // console.log(this.props);


    }
    handleClick = () => { 
        this.props.history.push({
            pathname: `/search/q=${this.state.searchTerm}/page/1`,
            state: {
                type: "search",
                searchTerm: this.state.searchTerm
            }
        })
    }
    

    updateSearch = (e) => {
        this.setState({ searchTerm: e.target.value })
        // console.log(e.target.value);
    }

    render() {
        
        return (
            <>
                <SearchContainer primary>
                    <CustomButton value={this.state.searchTerm} ></CustomButton>
                    <Input
                        type="text"
                        placeholder={this.state.placeholder}
                        value={this.state.searchTerm}
                        // updateSearch={this.updateSearch}
                        updateSearch={this.updateSearch}
                    />
 
                        <Button handleClick={this.handleClick} />
                </SearchContainer>

            </>
        )
    }
}

export default withRouter(Search)









        // console.log();
        // let array = this.state.tmdbData.results
        // let moviesResults = [];
        // for (let i = 0; i < this.state.tmdbData.results.length; i++) {
        //     moviesResults.push({
        //         title: array[i].title,
        //         tmdbId: array[i].tmdb_id,
        //         // poster:array[i].poster, 

        //     })
        // }
        // this.setState({ moviesResults: [...moviesResults] })