import React from 'react';
// import tmdb from '../../apis/tmdb';
import "../NowPlaying/NowPlaying.css"
class NowPlaying extends React.Component {
    
    // state = {
    //     data: null,
    //     page:null
    //   };
      
    //   async componentDidMount() {
    //     this.setState({ isLoading: true });
    //     const response = await tmdb.get(`/now_playing?api_key=b0a20e995baa08cdd818c57bcd38ffd1&language=en-US&page=${this.state.page}`);
    //     console.log(response.data.results);
    //     console.log(response.data.page);
    //     const data = response.data.results;
    //     this.setState({ data: data, page:null });
        
    //   }


    render(){
        return(
            <>
            <div className="now-playing">
                {/* {this.state.data && this.state.data.map((item) => {
                    return (
                        <div className="movie-card">
                        <img className="poster" alt={item.title} src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}></img>
                        <div className="movie-title">{item.title}</div>
                        <div className="release-date">{item.release_date}</div>
                        </div>
                );
            })
                } */}
                hello
            </div>
            </>
        )
    }
}
export default NowPlaying