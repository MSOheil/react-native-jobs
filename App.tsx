import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import Home from "./components/home/homescree"
export default function App() {
  const Stack = createStackNavigator();


    return (
      <NavigationContainer >
        <Home />
      </NavigationContainer>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
