import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { capitalize } from "lodash"
import name from "../../utils/getColorbyPokemon"
import getColorbyPokemon from '../../utils/getColorbyPokemon';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header(props) {

  const { name, order, image, type } = props;
  const color = getColorbyPokemon(type);
  const bgStyles = [{ backgroundColor: color, ...styles.bg }]

  return (
    <>
      <View style={bgStyles} />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>
            {capitalize(name)}
          </Text>
          <Text style={styles.order}>
            #{`${order}`.padStart(3, 0)}
          </Text>
        </View>
        <View style={styles.content}>
          <Image source={{ uri: image }} style={styles.image} />

        </View>
      </SafeAreaView>

    </>
  )
}

const styles = StyleSheet.create({

  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  container: {
    marginHorizontal: 20,
    marginTop: 30
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: 'contain'
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 27
  },
  order: {
    color: '#FFF',
    fontWeight: 'bold',
  }
})
