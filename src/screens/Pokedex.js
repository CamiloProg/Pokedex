import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonsApi, getPokemonDetailsApi } from "../api/pokemons"
import PokemonList from '../components/PokemonList';
export default function Pokedex() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })()
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi();
      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default
        })
      }
      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <View>
      <PokemonList pokemons={pokemons} />
    </View>
  )
}
