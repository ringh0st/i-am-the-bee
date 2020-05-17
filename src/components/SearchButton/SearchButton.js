
import React from 'react';
import CustomButton from '../CostomButton/CustomButton';
import {SearchContainer} from '../SearchButton/SearchButtonStyle.Styles'
import Input from '../Input/Input';

class SearchButton extends React.Component {
    state={
        // search:'Level Up',
        tmdbData: null,
        searchTerm:"",
        placeholder:"Search for.."

    }
    // async componentDidMount() { 
    //     this.setState({ 
    //         tmdbData: await searchMovieName(this.state.searchTerm),
    //     })
    //     console.log(tmdbData);
        
    // }
    
    updateSearch=(e)=>{
        this.setState({searchTerm:e.target.value})
        console.log(e.target.value);
    
    }

    render(){
        // let findMovie= this.props.movies.filter(
        //    movie =>{
        //     return movie.title.toLowerCase().indexOf(this.state.searchTerm) !== -1;
        //    } 
        // )
        return(
            <>
            <SearchContainer primary>
                <CustomButton value={this.state.searchTerm} ></CustomButton>
                    <Input 
                    placeholder={this.state.placeholder}    
                    value={this.state.searchTerm}
                    updateSearch={this.updateSearch}
                    />
            </SearchContainer>
            
        </>
        )
    }
}

export default SearchButton