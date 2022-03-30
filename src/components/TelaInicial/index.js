import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



export default function TelaInicial(props) {
    return (
        <View style={styles.container}>
              <TouchableOpacity onPress={()=>{props.navigation.navigate('Escaneamento')}}style={styles.botao}>
                <Text style={styles.textBotao}>Adicionar Produto</Text>
              </TouchableOpacity>
              <TouchableOpacity  style={styles.botao} onPress={()=>{props.navigation.navigate('Lista de produtos')}}>
                <Text style={styles.textBotao}>Lista de produtos</Text>
              </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100
    },
    botao: {
        padding:15,
        backgroundColor: '#3FBFBF',
        marginBottom: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    textBotao:{
        color:'#fff',
        fontSize:16,
    }
})