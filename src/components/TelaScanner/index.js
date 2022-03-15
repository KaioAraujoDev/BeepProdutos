import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Scanner from './Scanner';
import barCode from '../../../services/sqlite/barCode';
import db from '../../../services/sqlite/SQLiteDatabase';

export default function TelaScanner() {

  const [modalVisible, setModalVisible] = useState(false)
  const [items, setItems] = useState([]);
  var array=[]


  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from bars`,
        [],
        function (tx, res) {
          for (let i = 0; i < res.rows.length; ++i) {
            //Precisamos passar uma matriz para a variável 
            //Para transportar mais de uma informação pra cada id.

            //Adicionar
       
            // console.log('Dado: ',res.rows.item(i))
            setItems(oldArray => [...oldArray,res.rows.item(i)])
            
            
          }
          array=items
          // console.log('Variavel: ',items[1])
          console.log('Variavel: ',array[1])
        }
      )
    })
   
  }, [])


  //Quando o código for escaneado faça:
  const onCodeScanned = (type, data) => {
    // GUARDAR
    // barCode.create({ code: data })
    //   .then(console.log('banana'))
    //   .catch(err => console.log(err))

    setModalVisible(false)

  }

  const RenderItem = ({ item }) => {
    //const listItems = items.map((items) => items);

    return (

      <View style={styles.boxLista}>
        {/* {items.map(()=>(
        <Text style={styles.textBoxLista}>Código:</Text>
      ))} */}

        <Text style={styles.textBoxLista}></Text>
       
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType='fade'
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner onCodeScanned={onCodeScanned} />
          <Button
            title='Cancelar'
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>



      <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(true)}>
        <Text style={styles.textBotao}>
          Escanear
        </Text>
      </TouchableOpacity>

      <View style={styles.cardLista}>
        <FlatList data={array} renderItem={RenderItem}/>
        <RenderItem />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 15
  },
  modal: {
    height: '45%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E8E8E8',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  botao: {
    padding: 15,
    backgroundColor: '#3FBFBF',
    marginBottom: 35,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textBotao: {
    color: '#fff',
    fontSize: 16,
  },
  cardLista: {
    backgroundColor: '#E8E8E8',
    height: '75%',
    width: '85%',
    padding: 15
  },
  boxLista: {
    backgroundColor: '#3FBFBF',
    marginBottom: 10,
    padding: 15,
    borderRadius: 10
  },
  textBoxLista: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 25
  }
})  