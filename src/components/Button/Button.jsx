import React from 'react';
import {ButtonContainer} from '../Button/ButtonStyle.styles';
const Button = ({handleClick, content}) => {
    return (
      <ButtonContainer 
        onClick={handleClick}
      >
        { content}
      </ButtonContainer>
    );
  };
  export default Button;