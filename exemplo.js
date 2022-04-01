import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import 'react-native-get-random-values'; //DEPENDENCIA react-native-get-random-values
import { v4 as uuidv4 } from 'uuid'; //DEPENDENCIA uuid

import BarCode from './services/sqlite/BarCode'

/**
 * Example Car Object: {
 *  id: (auto generated in sqlite), 
 *  brand: 'citroen',
 *  model: 'ds3 performance',
 *  hp: 208
 * } 
 */

//COMENTARIO TESTE DE ATUALIZAÇÃO
const printBar = (bar) => {
  console.log(`id: ${bar.id}, codigo: ${bar.codigo}, quantidade: ${bar.quantidade}, data: ${bar.data}`)
}

export default function App() {
/*   //create
  BarCode.create( {id: uuidv4(), codigo:'123', quantidade: '1'} )
    .then( id => console.log('Bar created with id: '+ id) )
    .catch( err => console.log(err) ) */

/*   //update
  BarCode.update('1cf352df-1ee4-4e23-b669-63b1337cb34f', {codigo:'456', quantidade:'2'} )
    .then( updated => console.log('Bars updated: '+ updated) )
    .catch( err => console.log(err) ) */


/*     //delete
  BarCode.remove()
    .then( updated => console.log('bar removed: '+ updated) )
    .catch( err => console.log(err) ) */

  //all
  BarCode.all()
    .then( 
      bar => bar.forEach( c => printBar(c) )
    )


  return (
    <View style={styles.container}>
      <Text>(Check the Console)</Text>
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
