import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Picker, Modal, KeyboardAvoidingView } from 'react-native';
import ModalMain from './Modals/Modal';
import ModalEdit from './Modals/ModalEdit';
import ModalExcluir from './Modals/ModalExcluir';
import { SimpleLineIcons } from '@expo/vector-icons';
import Dialog from './Dialog';

export default function Item({ codigo, id }) {
    const [options, setOptions] = useState(false)
    const [visibleModalEdit, setVisibleModalEdit] = useState(false)
    const [visibleModalExcluir, setVisibleModalExcluir] = useState(false)
    const [DialogView, setDialogView] = useState(false);


    function verificar(visible) {
        setOptions(!visible)
    }
    // //só vai setar quando ler denovo
    function abrirEdit(visible) {
        setOptions(!visible)
        setVisibleModalEdit(true)
    }
    function fecharEdit(visible) {
        setVisibleModalEdit(!visible)
    }
    function abrirExcluir(visible) {
        setOptions(!visible)
        setVisibleModalExcluir(true)
    }
    function fecharExcluir(visible) {
        setVisibleModalExcluir(!visible)
    }
    return (

            <View style={styles.boxLista}>
                <Text
                    style={[styles.textBoxLista,
                    { fontSize: 19, textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }]}>
                    Produto:
                    <Text style={[styles.textBoxLista, { fontWeight: 'bold', fontSize: 18 }]}>
                        {codigo}
                    </Text>
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={[styles.textBoxLista, { fontSize: 16 }]}>Id: <Text style={{ fontSize: 13 }}>{id}</Text></Text>
                    <Text style={[styles.textBoxLista, { fontSize: 16 }]}>Quantidade: <Text style={{ fontSize: 13 }}>102</Text></Text>
                </View>
                <TouchableOpacity onPress={() => { setOptions(true) }}>
                    <SimpleLineIcons name="options-vertical" size={24} color="black" />
                </TouchableOpacity>
                <ModalMain codigo={codigo} id={id} visible={options} verificar={verificar} abrirEdit={abrirEdit} abrirExcluir={abrirExcluir} />
                <ModalEdit codigo={codigo} id={id} visible={visibleModalEdit} verificar={fecharEdit} />
                <ModalExcluir codigo={codigo} visible={visibleModalExcluir} verificar={fecharExcluir} />
                <Dialog descricao="Produto removido com sucesso"/> 
            </View>
    )
}
const styles = StyleSheet.create({
    boxLista: {
        justifyContent: 'center',
        backgroundColor: 'rgb(80,235,230)',
        marginBottom: 30,
        marginHorizontal: 40,
        height: 125,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    textBoxLista: {
        fontSize: 16,
        lineHeight: 25
    },
    
})
