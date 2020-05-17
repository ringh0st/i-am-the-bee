import React from 'react';

const MovieReviews = ({ reviewlist}) => {

return(
    <div>
        {reviewlist && reviewlist.map((item)=>{
            return(
                <div>{item.author}</div>
            )
        })}
    </div>
)


}
export default MovieReviews