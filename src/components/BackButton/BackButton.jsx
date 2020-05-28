import React from 'react';
import { useHistory } from "react-router-dom";
import {Container, BackButtonContainer} from './BackButtonStyle.styles';

const BackButton = () => {
    let history = useHistory();

    const onClickBack =()=>{
        history.goBack(-1)
        console.log("h");
        
    }
    return(
        <>
        <BackButtonContainer>
        <Container onClick={onClickBack}>back</Container>
        </BackButtonContainer>
            
        </>
    )
}

export default BackButton;