import React from 'react';
import {ButtonStyle} from './CustomButtonStyle.styles'

const CustomButton =({value}) =>{
    // debugger

    return(
        <ButtonStyle value>
            <i className="fa fa-search"></i>
        </ButtonStyle>
    )
}

export default CustomButton