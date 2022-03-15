import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TelaScanner from './src/components/TelaScanner'
import TelaInicial from './src/components/TelaInicial'

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela Inicial' component={TelaInicial}/>
        <Stack.Screen name='Escaneamento' component={TelaScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

