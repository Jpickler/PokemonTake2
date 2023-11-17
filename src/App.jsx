import { useEffect, useState } from 'react'
import './App.css'
import PokemonList from './components/PokemonList';

function App() {
  const [pokemonList, setPokemonList] = useState([]);


  return(
    PokemonList(pokemonList, setPokemonList)
  )

}

export default App
