import React from 'react' 

const CharDetails = (props) => {
    const { character } = props;

    return (
        <div>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        <p>Hair Color: {character.hair_color}</p>
        <p>Eye Color: {character.eye_color}</p>
        <p>Mass: {character.mass}</p>
        <p>Height: {character.height}</p>
        <p>Appears In: </p>
        <ul>
            {character.films.map((film) => <li key={film}>{film}</li>)}
        </ul>
        
        </div>
    )
}
export default CharDetails;