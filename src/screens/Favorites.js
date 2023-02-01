import { View, Text, Button } from 'react-native'
import React from 'react'
import { getPokemonFavoriteApi } from '../api/favorite'


export default function Favorites() {
  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  }
  return (
    <View>
      <Text>Favorites</Text>
      <Button title='Get Favorites' onPress={checkFavorites} />
    </View>
  )
}
