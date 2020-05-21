import React from 'react';
import {ButtonContainer} from '../Button/ButtonStyle.styles';
const Button = ({handleClick}) => {
    return (
      <ButtonContainer
        onClick={handleClick}
      >
        Go
      </ButtonContainer>
    );
  };
  export default Button;