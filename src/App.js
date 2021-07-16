import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'

const Container = styled.section`
  display: flex; 
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const CharInfo = styled.section`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  width: 40%;
`

const App = () => {
const [character, setCharacter] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
    .then(response => {
      console.log(response)
      setCharacter(response.data)
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <Container>
        <h1 className="Header">REACT WARS</h1>
        <CharInfo>
        <div>
        {character.map((character, key) => (
        <Character key={key} character={character} />))}
        </div>
        </CharInfo>
      </Container>

  );
}

export default App;
