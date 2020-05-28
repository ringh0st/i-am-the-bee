import React from 'react';
import bee from '../../images/bee.png';
import {SpinnerContainer} from './SpinnerStyle.styles'
const Spinner = () => {
    return (
    <div>
        <SpinnerContainer alt={'spinner'} src={bee} ></SpinnerContainer>
    </div>
    );
};

export default Spinner;