
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
        isClean: true,
        text:'go'

    }


    updateSearch = (e) => {
        this.setState({ searchTerm: e.target.value })                 
    }
    handleClick = (e) => {  
        e.preventDefault();

        console.log(this.state.searchTerm);
   
        this.props.history.push({
            pathname: `/search/q=${this.state.searchTerm}/page/1`,
            state: {
                type: "search",
                searchTerm: this.state.searchTerm,
            }
        })
        this.setState({ searchTerm: e.target.value })
        console.log(this.state.searchTerm);

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
                        updateSearch={this.updateSearch}
                    />
                        <Button  handleClick={this.handleClick} content={this.state.text} />
                </SearchContainer>
            </>
        )
    }
    
}

export default withRouter(Search)

