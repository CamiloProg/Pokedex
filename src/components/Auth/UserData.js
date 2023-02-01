import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { getPokemonFavoriteApi } from "../../api/favorite";
import useAuth from "../../hooks/useAuth"
export default function UserData() {
  const favorites = async () => {
    const response = await getPokemonFavoriteApi()
    const favorite = response.lenght
    return favorite;
  }
  console.log(favorites);
  const { auth, logOut } = useAuth();

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>
      <View style={styles.dataContent}>
        <ItemMenu title="Name:" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Username:" text={`${auth.username} `} />
        <ItemMenu title="Email:" text={`${auth.email} `} />
        <ItemMenu title="Favorites:" text={`favorite ${favorite}`} />
      </View>
      <Button title='Log Out' onPress={logOut} />
    </View>
  )
}

function ItemMenu(props) {
  const { title, text } = props;
  return (
    <View style={styles.ItemMenu}>
      <Text style={styles.ItemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 22
  },
  dataContent: {
    marginBottom: 20,

  },
  ItemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF'
  },
  ItemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120
  }
})
