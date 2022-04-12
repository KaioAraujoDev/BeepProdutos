import React from 'react';
import {  Text, Modal} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import {Main,Icon,DivText,Title,DivButtons,ButtonEdit,ButtonExcluir,TextButton} from './StylesModal'
import {Modalize} from 'react-native-modalize';

export default function ModalMain({ codigo, visible, verificar, id ,abrirEdit,abrirExcluir}) {
    

    return (
        <Modal animationType='slide' transparent={true} visible={visible} onRequestClose={()=>{verificar(visible)}}>
            <Main>
                <Icon onPress={() =>{verificar(visible)}}>
                    <AntDesign name="close" size={22} color="black" />
                </Icon>
                <DivText>
                    <Title>Produto: {codigo}</Title>
                    <Text>Quantidade: 1122</Text>
                    <Text>Id: {id}</Text>
                </DivText>
                <DivButtons>
                    <ButtonEdit onPress={()=>{abrirEdit(visible)}}><TextButton>Editar</TextButton></ButtonEdit>
                    <ButtonExcluir onPress={()=>{abrirExcluir(visible)}}><Text>Excluir</Text></ButtonExcluir>
                </DivButtons>
            </Main>
        </Modal>
    )
}

