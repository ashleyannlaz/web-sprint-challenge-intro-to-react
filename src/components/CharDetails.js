import React from 'react' 
import styled from 'styled-components'

const CharDetails = (props) => {
    const { character } = props;

    return (
        <div>
        <div>Show this on click
        <p>{character.birth_year}</p>
        <p>{character.gender}</p>
        <p>{character.hair_color}</p>
        <p>{character.eye_color}</p>
        <p>{character.mass}</p>
        <p>{character.height}</p>
        <p>{character.films}</p>
        </div>
        </div>
    )
}

export default CharDetails;