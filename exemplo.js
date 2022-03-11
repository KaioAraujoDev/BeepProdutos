import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import barCode from './services/sqlite/barCode'

const printBar = (barCode) => {
  console.log(`id:${barCode.id}, code: ${barCode.code}`)
}

export default function App() {

  //Create
  barCode.create( {code: '123'} )
    .then(id => console.log('Codigo salvo com id: ' + id) )
    .catch( err => console.log(err) )

  barCode.create( {code: '456'} )
  .then(id => console.log('Codigo salvo com id: ' + id) )
  .catch( err => console.log(err) )

  barCode.all()
      .then(
        bars => bars.forEach( b => printBar(b))
      )

  console.log('============================================')

  barCode.remove(9)
      .then( code => console.log('Codigo Removido: '+ code) )
      .catch( err => console.log(err) )

  barCode.remove(10)
      .then( code => console.log('Codigo Removido: '+ code) )
      .catch( err => console.log(err) )
  
  barCode.all()
  .then(
    bars => bars.forEach( b => printBar(b))
  )
      
  return (
    <View style={styles.container}>
      <Text>(Check Console)!</Text>
    </View>
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
