import React from 'react';
import { useHistory } from "react-router-dom";

const BackButton = () => {
    let history = useHistory();

    const onClickBack =()=>{
        history.goBack(-1)
        console.log("h");
        
    }
    return(
        <>
            <button onClick={onClickBack}>back</button>
        </>
    )
}

export default BackButton;