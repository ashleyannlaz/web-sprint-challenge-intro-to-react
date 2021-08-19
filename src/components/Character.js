import React, { useState } from 'react' 
import styled from 'styled-components'
import CharDetails from './CharDetails'

const CharContainer = styled.section`
border: solid 2px black;
border-radius: 0px 30px 5px 30px;
background-color: rgba(255, 255, 255, .9);
padding: 10px 10px 10px 30px;
margin-bottom: 10px;
`
const CharName = styled.h3`
text-transform: uppercase;
`
const Character = (props) => {
    const { character } = props;
    const [showChar, setShowChar] = useState(false)
    const onClick = () => setShowChar(!showChar)

    return (
        <CharContainer onClick={onClick}>
        <CharName> >> {character.name}</CharName> {showChar ? <CharDetails character={character} /> : null}</CharContainer>
    )
}

export default Character;