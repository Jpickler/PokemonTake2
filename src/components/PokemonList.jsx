import { useState } from "react";
import { useEffect } from "react";
import SelectedPokemon from "./SelectedPokemon";


const PokemonList =(pokemonList, setPokemonList) => {
  const [selectedPokemon, setSelectedPokemon] = useState(``);


  const handleClickedItem = (name) => {
    console.log(`name is: `, name);
    setSelectedPokemon(name); 
    console.log(`selectedpokemon is: `, selectedPokemon);    
  }//end handleClickedItem



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
        <p> {selectedPokemon}</p>
        <ol >
          {pokemonList.map((pokemon) => (
            //return (
                <li  
                  key={pokemon.name} 
                  //setSelectedPokemon= {setSelectedPokemon}
                  onClick={() => handleClickedItem(pokemon.name)}                   
                  > {pokemon.name}
                </li>
            //)
            ))}
        </ol>
      </>
    )

}// end pokemon list

export default PokemonList