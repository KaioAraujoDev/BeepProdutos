import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Scanner from './Scanner';
import barCode from '../../../services/sqlite/barCode';
import db from '../../../services/sqlite/SQLiteDatabase';

export default function TelaScanner() {

  const [modalVisible, setModalVisible] = useState(false)
  const [items, setItems] = useState([]);
  const [att, setAtt] = useState(false)


  //A Data só esta sendo notada no início do código
  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `select * from bars`,
        [],
        function (tx, res) {      
          for (let i = items.length; i < res.rows.length; ++i) {
            //Precisamos passar uma matriz para a variável 
            //Para transportar mais de uma informação pra cada id.

            //Adicionar
            setItems(oldArray => [...oldArray, res.rows.item(i)])
          
          }
       
        }
      )
    })
  }, [att])




  //Quando o código for escaneado faça:
  const onCodeScanned = (type, data) => {
    // GUARDAR
    barCode.create({ code: data })
      .then(setAtt(!att))
      .catch(err => console.log(err))

    setModalVisible(false)
  }


  const renderItem = ({ item }) => {
    //const listItems = items.map(c(items) => items);
    return (
      <View style={styles.boxLista}>
        <Text>Código{item.code}</Text>
        <Text>Id:{item.id}</Text>
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
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setModalVisible(false)}
          >
            <Text styles={styles.textBotao}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>


    
      <TouchableOpacity style={styles.botao} onPress={() => setModalVisible(true)}>
        <Text style={styles.textBotao}>
          Escanear
        </Text>
      </TouchableOpacity>

      <View style={styles.cardLista}>
        {(items.length > 0)?<FlatList data={items} renderItem={renderItem} inverted />:<ActivityIndicator color="#3FBFBF" size={65}/>}
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
    marginTop:'50%',
    marginHorizontal:10,
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
    marginBottom: 15,
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
    padding: 15,
    justifyContent: 'center',
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