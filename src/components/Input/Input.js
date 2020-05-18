import React from 'react';
import {InputContainer} from '../Input/InputStyle.styles'

const Input =({ placeholder, value, updateSearch }) =>{

    return(
        <InputContainer 
        placeholder={placeholder}     
        value={value}
        onChange={updateSearch}
        />
    )
}

export default Input