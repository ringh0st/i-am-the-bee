import React from 'react';
import '../Pagination/pagination.css';

const Pagination = ({previousPage, nextPage}) => {

    return(
        <>
        <button onClick={previousPage}>previous Page</button>
        <button onClick={nextPage}>Next Page</button>
        </>
    )
}

export default Pagination;
