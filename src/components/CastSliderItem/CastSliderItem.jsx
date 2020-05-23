import React from 'react';
import { CastContainer, CastName, CastCharacter, CastImage } from '../CastSliderItem/CastSliderItemStyle.styles'

const CastSliderItem = ({ poster , name ,character}) => {

    return (
        <CastContainer key={name}>
            <CastImage alt={name} src={poster}></CastImage>
            <CastName >{name}</CastName>
            <CastCharacter >{character}</CastCharacter>
        </CastContainer>
    )
}
export default CastSliderItem