import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import backimage from '../../../assets/BackgroundApp.jpg';
import oceanlogo from '../../../assets/oceanlogo.png';
import lista from '../../../assets/lista.png';
import add from '../../../assets/add.png';
import BarraVertical from './BarraVertical'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../header'


export default function TelaInicial(props) {
  return (
    <View>
      <ImageBackground
        source={backimage}
        style={styles.backimg}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(80,232,235,0.5)', 'transparent']}
          style={styles.background}
        />
        <Header />
        <Image source={oceanlogo} style={styles.logo} />

        <View>
          <Text style={styles.subtitulo}> Registro de Materiais </Text>
        </View>

        <View style={styles.viewRow}>
          <TouchableOpacity onPress={()=>{props.navigation.navigate('Escaneamento')}} style={styles.botao}>
            <Image source={add} style={styles.icons} />
            <Text style={{ fontWeight: 'bold' }}>Adicionar Produtos</Text>
          </TouchableOpacity>

          <BarraVertical />

          <TouchableOpacity onPress={()=>{props.navigation.navigate('Lista de produtos')}}  style={styles.botao}>
            <Image source={lista} style={styles.icons} />
            <Text style={{ fontWeight: 'bold' }}>Listar Produtos</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '55%',
  },
  backimg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderWidth: 0.8,
    borderColor: '#545457',
  },
  logo: {
    width: '80%',
    height: '30%',
    resizeMode: 'contain',
  },

  subtitulo: {
    marginBottom: 180,
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#545457',
  },
  viewRow: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '80%',
    height: '15%',
  },

  icons: {
    width: '60%',
    height: '75%',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
})