import React from 'react';
import { CastContainer, CastName, CastCharacter , CastImage} from '../Casts/CastsStyle.style'

const Casts = ({ movieCast }) => {

    return (
        movieCast && movieCast.map((item) => {
            return (
                <CastContainer key={item.id}>
                    <CastImage  alt={item.id} src={item.poster}></CastImage>
                    <CastName >{item.name}</CastName>
                    <CastCharacter >{item.character}</CastCharacter>
                </CastContainer>
            )
        })

    )

}

export default Casts