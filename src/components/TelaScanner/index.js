import React, { useState, useEffect } from 'react';
import { AntDesign, Entypo } from '@expo/vector-icons';

import {
    View,
    Text,
    ActivityIndicator,
    Modal,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    TextInput,
    Alert,
} from 'react-native';
import Scanner from './Scanner';
import ModalInputs from './modal';
import Barcode from '../../../services/sqlite/BarCode';
import db from '../../../services/sqlite/SQLiteDatabase';

export default function TelaScanner(props) {

    const [modalVisible, setModalVisible] = useState(false)
    const [sucess,setSucess] = useState(false)

    const [codigo, setCodigo] = useState('');

    const [items, setItems] = useState([]);//array de items da lista
    const [Loading, setLoading] = useState(false)

    //Quando o código for escaneado faça:
    const onCodeScanned = (type, data) => {
        // GUARDAR
        // Barcode.create({ code: data })
        //   .then(Roda())
        //   .catch(err => console.log(err))
        Alert('DEU CERTO '+data)
        setCodigo(data)
    }

    const ModalPlus = () => {
        function fechar(fechar) {
            setModalVisible(!fechar)
        }
        function addFechar(fechar, codigo, qt) {
            // Barcode.create({ code: codigo })
            //    .then()
            //    .catch(err => console.log(err))
            setModalVisible(!fechar)

        }
        if (modalVisible == true) {
            return (<ModalInputs codigo={codigo} habilitado={modalVisible} fechar={fechar} addFechar={addFechar} />)
        } else {
            return false
        }
    }

    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                visible={sucess}
                style={styles.modalCheck}
            >
                <AntDesign name="check" size={24} color="black" />
                <Text>Produto adicionado</Text>
            </Modal>
            <View style={styles.containerNav}>

                <TouchableOpacity
                    style={[styles.containerIconDiv, {
                        padding: 10, position: 'absolute',
                        backgroundColor: 'rgba(6,55,66,1)',
                        right: '1%',
                        borderRadius: 10
                    }]}
                    onPress={() => { props.navigation.navigate('Lista de produtos') }}
                >
                    <Entypo name="list" size={35} color="white" />
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%',
                width: '100%'
            }} >
                <Scanner onCodeScanned={onCodeScanned} />
            </View>

            <ModalPlus />

            <TouchableOpacity
                style={{
                    padding: 10, zIndex: 1, position: 'absolute',
                    backgroundColor: 'rgba(6,55,66,1)',
                    bottom: '15%', right: '2%',
                    borderRadius: 10
                }}
                onPress={() => { setModalVisible(true) }}
            >
                <AntDesign name="plus" size={30} color="white" />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(6,55,66,0.7)',
    },
    containerNav: {
        flexDirection: 'row',
        width: '100%',
        height: '5%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '1%'
    },
    containerIconDiv: {
        alignItems: 'flex-end',
    },
    textLabel: {
        fontSize: 15,
        color: 'white',
        letterSpacing: 0.4,
    },
    modalCheck:{
        backgroundColor: 'rgb(6,55,66)',
        width: 100,
        height: 100,
    }
})  