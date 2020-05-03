import React from 'react';
import { withRouter } from "react-router-dom";
import '../Pagination/pagination.css';
// import LatestMovies from '../LatestMovies/LatestMovies'
// console.log(LatestMovies);
// import tmdb from '../../apis/tmdb';

// let currentDate = new Date().toISOString().split('T')[0];
let buttonsForPagination = 10


class Pagination extends React.Component {
    state = {
        total: [],
        currentPage: 1,
        postsPerPage: 20,
        disableNext: false,
        disable: false,
        disabledPrevSet:false,
        disabledNexrSet:false,
        totalResults: null,
        pageNumbers: [],
        currentPosts: [],


    }


    async componentDidMount() {
        // this.setState({ total: this.props.data.total_pages })  
        let totalResults = this.props.data.total_results
        let total = this.props.data.total_pages
        this.setState({
            total: total,
            totalResults: totalResults
        })
        // console.log(totalResults);

        const pageNumbers = [];
        if (totalResults !== null) {
            for (let i = 1; i <= Math.ceil(totalResults / this.state.postsPerPage); i++) {
                pageNumbers.push(i);
            }
            // console.log(pageNumbers)
            this.setState({ pageNumbers: pageNumbers })
        }
        let firstPost = this.state.currentPage - 1;
        let lastPost = buttonsForPagination;

        this.setState({ currentPosts: pageNumbers.slice(firstPost, lastPost) })
        console.log(firstPost);



    }
    pageNumbers = []

    ///PSEUDO CODE//
    /*
    find out how many pages we have
    create buttons 
    slice(0,10)
    click >>> slice(10,20)
     */
    nextPagesSet = async (currentPosts, currentPage, pageNumbers) => {
        console.log(this.state.currentPosts[0] -1 );
        
        if (this.state.currentPosts[0] -1 !== (this.state.total - buttonsForPagination)){
            let firstPost = this.state.currentPosts.slice(-1)[0]
            let lastPost = firstPost + buttonsForPagination
            this.setState({
                currentPage: this.state.currentPage,
                currentPosts: this.state.pageNumbers.slice(firstPost, lastPost)
    
            })
            this.props.handleData(await this.props.api(firstPost));
            this.props.history.push(`/latest/page/${firstPost}`);
        }
        else{
            this.setState({ disabledNextSet: true });
        }
    }

    prevPagesSet = async (currentPosts, currentPage, pageNumbers) => {
        console.log(this.state.currentPosts)
        if (this.state.currentPosts[0] !== 1){
            let lastPost = this.state.currentPosts[0] -1
            let firstPost = lastPost - buttonsForPagination
            console.log(firstPost);
            
            this.setState({
                currentPage: this.state.currentPage,
                currentPosts: this.state.pageNumbers.slice(firstPost, lastPost)
    
            })
            this.props.handleData(await this.props.api(firstPost));
            this.props.history.push(`/latest/page/${firstPost}`);
        }
        else{
            this.setState({ disabledPrevSet: true });
        }
    }
    
    pageNum = async (e, currentPage) => {
        const id = e.target.id;
        console.log(id);

        let page = id;
        this.setState({ currentPage: this.state.currentPage })
        this.props.handleData(await this.props.api(page));
        this.props.history.push(`/latest/page/${page}`);
        // }
    }

    nextPage = async (currentPage, disabledNext) => {
        // let total = this.state.totalPages
        if (this.state.currentPage !== `${this.state.total}`) {
            let page = this.state.currentPage + 1;
            this.setState({ disabledNext: false, currentPage: this.state.currentPage + 1 })
            this.props.handleData(await this.props.api(page));
            this.props.history.push(`/latest/page/${page}`);
            // window.location.reload(false)
        }
        else {
            this.setState({ disabledNext: true });
        }
    }
    prevPage = async (currentPage, disabled) => {
        // let total = this.state.totalPages
        if (this.state.currentPage !== `1`) {
            let page = this.state.currentPage - 1;
            this.setState({ disabled: false, currentPage: this.state.currentPage - 1 })
            // console.log(this.state.currentPage);
            this.props.handleData(await this.props.api(page));
            this.props.history.push(`/latest/page/${page}`);
            // window.location.reload(false)
        }
        else {
            this.setState({ disabledNext: true });
        }
    }



    render() {
        // console.log(this.state.currentPosts);

        return (
            <>
                <button onClick={this.prevPage} disabled={this.state.disabled} style={{ fontSize: '20px' }}>&#10218;Previous</button>
                <button onClick={this.prevPagesSet} disabled={this.state.disabledPrevSet} >&#10510;</button>
                <span>
                    {this.state.currentPosts && this.state.currentPosts.map((num, key) => {
                        return (<button id={num} key={key} onClick={this.pageNum}>{num}</button>)

                    })}
                </span>
                <button onClick={this.nextPagesSet} disabled={this.state.disabledNextSet}>&#10509;</button>
                <button onClick={this.nextPage} disabled={this.state.disabledNext} style={{ fontSize: '20px' }}>Next&#10219;</button>

            </>
        )
    }
}


export default withRouter(Pagination);
