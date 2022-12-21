import React from 'react'
import { Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import Favorites from "../screens/Favorites"
import Account from "../screens/Account"
import Pokedex from "../screens/Pokedex"
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorites" component={Favorites} options={{
        tabBarLabel: "Favorites",
        tabBarIcon: ({ color, size }) => (
          <Icon name="heart" color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Pokedex" component={Pokedex} options={{
        tabBarLabel: "",
        headerShown: false,
        tabBarIcon: () => renderPokeball()
      }} />

      <Tab.Screen name="Account" component={Account} options={{
        tabBarLabel: "Account",
        tabBarIcon: ({ color, size }) => (
          <Icon name="user" color={color} size={size} />
        )
      }} />
    </Tab.Navigator>
  )
}


function renderPokeball() {
  return (
    <Image
      source={require("../../assets/pokeball.png")}
      style={{ width: 70, height: 70, top: -17 }}
    />
  )
}
