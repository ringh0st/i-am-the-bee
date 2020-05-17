
import React from 'react';
import {SearchButtonStyle} from '../SearchButton/SearchButtonStyle.Styles'

class SearchButton extends React.Component {
    state={
        // search:'Level Up',
        tmdbData: null,
        searchTerm:""

    }
    // async componentDidMount() { 
    //     this.setState({ 
    //         tmdbData: await searchMovieName(this.state.searchTerm),
    //     })
    //     console.log(tmdbData);
        
    // }
    updateSearch=(e)=>{
        this.setState({searchTerm:e.target.value})
        console.log(this.state.searchTerm);
    
    }
    render(){
        // let findMovie= this.props.movies.filter(
        //    movie =>{
        //     return movie.title.toLowerCase().indexOf(this.state.searchTerm) !== -1;
        //    } 
        // )
        return(
            <>
            <SearchButtonStyle/>
            <div className="search-form">
            <span value={this.state.searchTerm} ><i className="fa fa-search"></i></span>
                <input 
                className="search-button"
                placeholder="Search for..."     
                value={this.state.searchTerm}
                onChange={this.updateSearch.bind(this)}
                />
        </div>
        </>
        )
    }
}

export default SearchButton