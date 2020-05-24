import React from 'react';
import {InputContainer} from './InputStyle.styles'

const Input =({ placeholder, value, updateSearch, type }) =>{

    return(
        <InputContainer 
        type={type}
        placeholder={placeholder}     
        value={value}
        onChange={updateSearch}
        />
    )
}

export default Input