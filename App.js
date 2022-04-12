import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TelaScanner from './src/components/TelaScanner'
import TelaInicial from './src/components/TelaInicial'
import TelaLista from './src/components/TelaLista'
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
           backgroundColor:'rgba(6,55,66,0.7)',

        },
        headerTitleStyle:{
          color:'white'
        },
        headerTintColor:'white',
        headerShown: false,
      }}
      >
        <Stack.Screen name='Tela Inicial' component={TelaInicial}/>
        <Stack.Screen name='Escaneamento' component={TelaScanner} />
        <Stack.Screen
        name='Lista de produtos' component={TelaLista}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

