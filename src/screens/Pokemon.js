import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getPokemonDetails } from '../api/pokemons'
import Header from '../components/Pokemon/Header';
import { ScrollView } from 'react-native-gesture-handler';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Icon from "react-native-vector-icons/FontAwesome5"
import useAuth from '../hooks/useAuth';
import Favorite from '../components/Pokemon/Favorite';

export default function Pokemon(props) {
  const { navigation, route: { params } } = props;

  const [pokemon, setPokemon] = useState(null)
  const { auth } = useAuth();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => <Icon name="arrow-left" color="#fff" size={20} style={{ marginLeft: 20 }} onPress={navigation.goBack} />

    })
  }, [navigation, params, pokemon])

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetails(params.id);
        setPokemon(response)
      } catch (error) {
        navigation.goBack();
      }
    })();

  }, [params]);

  if (!pokemon) return null;


  return (
    //  hola mundoxdd
    <ScrollView>
      <Header name={pokemon.name} order={pokemon.id} image={pokemon.sprites.other['official-artwork'].front_default} type={pokemon.types[0].type.name} />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
