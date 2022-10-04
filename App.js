import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home'
import CadastrarViagem from './screen/cadastrarViagem';
import ListarViagens from './screen/ListarViagens';
import DeletarViagem from './screen/DeletarViagem';
import AtualizarViagem from './screen/AtualizarViagem';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="CadastrarViagem"
          component={CadastrarViagem}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="ListarViagens"
          component={ListarViagens}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="DeletarViagem"
          component={DeletarViagem}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="AtualizarViagem"
          component={AtualizarViagem}
          options={{ title: 'Welcome' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

