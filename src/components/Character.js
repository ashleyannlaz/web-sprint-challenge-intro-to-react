// Write your Character component here
import React, { useState } from 'react' 
import styled from 'styled-components'
import CharDetails from './CharDetails'

const CharContainer = styled.section`
border: solid 1px black;
padding: 10px;
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
        <div>
        <CharContainer onClick={onClick}>
        <CharName>{character.name}</CharName> {showChar ? <CharDetails character={character} /> : null}</CharContainer>
        </div>
    )
}

export default Character;