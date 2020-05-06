import React from 'react';
import { withRouter } from "react-router-dom";
import '../Pagination/pagination.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

// let buttonsForPagination = 10

class Pagination extends React.Component {
    state = {
        total: [],
        currentPage: 1,
        postsPerPage: 20,
        disableNext: false,
        disabledPrev: false,
        disabledPrevSet: false,
        disabledNextSet: false,
        totalResults: null,
        pageNumbers: [],
        currentPosts: [],
        buttonsForPagination: this.props.buttonsNumber,
    }



    async componentDidMount() {
        let totalResults = this.props.data.total_results
        let total = this.props.data.total_pages
        this.setState({ buttonsForPagination: this.props.buttonsNumber });
        this.setState({
            total: total,
            totalResults: totalResults,
        })
        const pageNumbers = [];
        if (totalResults !== null) {

            for (let i = 1; i <= Math.ceil(totalResults / this.state.postsPerPage); i++) {
                pageNumbers.push(i);
            }
            this.setState({ pageNumbers: pageNumbers })
        }
        let firstPost = this.state.currentPage - 1;
        let lastPost = this.state.buttonsForPagination;
        this.setState({ currentPosts: pageNumbers.slice(firstPost, lastPost) })
    }
    pageNum = async (e) => {
        const id = e.target.id;
        let page = id;
        this.setState({ currentPage: this.state.currentPage })
        this.props.handleData(await this.props.api(page));
        this.props.history.push(`/${this.props.path}/page/${page}`);
    }
    nextPagesSet = async () => {
        
        if (this.state.currentPosts[0] - 1 !== (this.state.total - this.state.buttonsForPagination)) {
            let firstPost = this.state.currentPosts.slice(-1)[0] 
            let lastPost = firstPost + this.state.buttonsForPagination
            this.setState({
                currentPage: firstPost ,
                currentPosts: this.state.pageNumbers.slice(firstPost, lastPost),
                disabledPrev:false,
                disabledPrevSet:false,
            })
            this.props.handleData(await this.props.api(firstPost+1));
            this.props.history.push(`/${this.props.path}/page/${firstPost+1}`);
        }
        else {
            this.setState({ disabledNextSet: true });
        }
    }

    nextPage = async () => {
        if (this.state.currentPage !== `${this.state.total}`) {
            let page = this.state.currentPage + 1;
            let firstPost = (this.state.currentPosts.slice(-1)[0]) 
            let lastPost = firstPost + this.state.buttonsForPagination
            if (page > this.state.currentPosts.slice(-1)[0]){
                this.setState({
                    currentPage: lastPost,
                    currentPosts: this.state.pageNumbers.slice(firstPost, lastPost)
    
                })
            }
            this.setState({ disabledNext: false,
                 currentPage: this.state.currentPage + 1,
                 disabledPrev:false,
                 })
            this.props.handleData(await this.props.api(page));
            this.props.history.push(`/${this.props.path}/page/${page}`);
            // window.location.reload(false)
        }
        else {
            this.setState({ disabledNext: true });
        }
    }

    prevPage = async () => {
        // console.log(this.state.currentPage);
        
        if (this.state.currentPage !== 1) {
            let page = this.state.currentPage;
            let lastPost = page
            let firstPost =  page - this.state.buttonsForPagination
            console.log(page);
            console.log(firstPost);
            console.log(lastPost);
            if (page < this.state.currentPosts[0]){
                this.setState({
                    currentPosts: this.state.pageNumbers.slice(firstPost, lastPost),
                    currentPage:page 
                })
            }
            this.setState({ 
                disabledPrev: false, 
                currentPage:  this.state.currentPage - 1,
             })
            this.props.handleData(await this.props.api(page));
            this.props.history.push(`/${this.props.path}/page/${page}`);
            // window.location.reload(false)
        }
        else {
            this.setState({ disabledPrev: true });
        }
    }
    prevPagesSet = async () => {
        
        if (this.state.currentPosts[0] !== 1) {
            let lastPost = this.state.currentPosts[0] - 1
            let firstPost = lastPost - this.state.buttonsForPagination
            this.setState({
                disabledPrevSet: false, 
                disabledPrev:false,
                currentPage: lastPost,
                currentPosts: this.state.pageNumbers.slice(firstPost, lastPost)

            })
            this.props.handleData(await this.props.api(lastPost));
            this.props.history.push(`/${this.props.path}/page/${lastPost}`);
        }
        else {
            this.setState({ disabledPrevSet: true });
        }
    }





    render() {



        return (
            
            <><div className="pagination">
                
                <button onClick={this.prevPagesSet}disabled={this.state.disabledPrevSet}  style={{ fontSize: '20px' }}><i className="fa fa-fast-backward"></i></button>
                <button  className="prev"  onClick={this.prevPage}  disabled={this.state.disabledPrev}><i className="fa fa-step-backward"></i></button>
                    {this.state.currentPosts && this.state.currentPosts.map((num, key) => {
                        return (<button href="#"  className={(this.state.currentPage === num ? 'active ' : '') + 'page-number'} id={num} key={key} onClick={this.pageNum}>{num}</button>)
                    })}
                <button className="next" onClick={this.nextPage} disabled={this.state.disabledNext} ><i className="fa fa-step-forward"></i></button>
                <button  onClick={this.nextPagesSet}disabled={this.state.disabledNextSet} style={{ fontSize: '20px' }}><i className="fa fa-fast-forward"></i></button>

            </div>
            </>
        )
    }
}


export default withRouter(Pagination);
