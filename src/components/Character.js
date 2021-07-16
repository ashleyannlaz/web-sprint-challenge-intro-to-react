// Write your Character component here
import React, { useState } from 'react' 
import styled from 'styled-components'
import CharDetails from './CharDetails'

const Character = (props) => {
    const { character } = props;
    const [showChar, setShowChar] = useState(false)
    const onClick = () => setShowChar(!showChar)

    return (
        <div>

        <div onClick={onClick}>
        {character.name} {showChar ? <CharDetails character={character} /> : null}</div>

        


        </div>
    )
}

export default Character;