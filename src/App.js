import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'

const Container = styled.section`
  display: flex; 
  flex-direction: column;
  align-items: center;
`
const CharInfo = styled.section`
  width: 40%;
`
const Header = styled.h1`
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  font-family: 'Zen Tokyo Zoo', cursive;
  font-size: 3rem;
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
        <Header>REACT WARS</Header>
        <CharInfo>
        {character.map((character, key) => (
        <Character key={key} character={character} />))}
        </CharInfo>
      </Container>

  );
}

export default App;
