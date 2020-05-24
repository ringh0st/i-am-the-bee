import React from 'react';
import { useHistory } from "react-router-dom";
import {Container} from './BackButtonStyle.styles'
const BackButton = () => {
    let history = useHistory();

    const onClickBack =()=>{
        history.goBack(-1)
        console.log("h");
        
    }
    return(
        <>
            <Container onClick={onClickBack}>back</Container>
        </>
    )
}

export default BackButton;