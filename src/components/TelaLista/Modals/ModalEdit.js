import React from 'react';
import { Main, Icon, DivText, Title, DivButtons, ButtonEdit, ButtonExcluir, TextButton, Input, Label } from './StylesModal'
import { View, TouchableOpacity, Text, Modal, StyleSheet ,KeyboardAvoidingView} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ModalEdit({ codigo, visible, id, verificar }) {
    return (
            <Modal animationType='slide' transparent={true} visible={visible} onRequestClose={() => { verificar(visible) }}>
                <Main >
                    <Icon onPress={() => { verificar(visible) }}>
                        <AntDesign name="close" size={22} color="black" />
                    </Icon>
                    <DivText>
                        <Title>Produto: {codigo}</Title>
                        <Label>Nova quantidade</Label>
                        <Input selectionColor='black' keyboardType='numeric' placeholder="Quantidade" />
                        <Label>Nova descrição</Label>
                        <Input selectionColor='black'  placeholder="Descrição" />
                    </DivText>
                    <DivButtons>
                        <ButtonEdit><TextButton>Salvar</TextButton></ButtonEdit>
                        <ButtonExcluir onPress={() => { verificar(visible) }}><Text>Cancelar</Text></ButtonExcluir>
                    </DivButtons>
                </Main>
            </Modal>
       
    )
}