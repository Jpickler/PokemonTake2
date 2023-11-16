import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([]);


useEffect(() => { 
  //console.log(`use effect was run`);
  const fetchData = async() => {
    const responseRaw= await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const response = await responseRaw.json();
    //console.log(response.results);
    setPokemonList(response.results);

  }; //end getPokemonData
  fetchData();
}, []); // end useEffect


  return (
    <>
      <h1> Pokemon List </h1>
      <ol>{
        pokemonList.map((pokemon) => {
          return <li key={pokemon.name}> {pokemon.name} </li>
        })
        }
        <li></li>
      </ol>
    </>
  )
}

export default App
