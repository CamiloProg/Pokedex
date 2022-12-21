import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />

    </NavigationContainer>
  );
}
