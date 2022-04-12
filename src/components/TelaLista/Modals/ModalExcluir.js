import React from 'react';
import { Modal, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Main, Icon, DivText, Title, DivButtons, ButtonEdit, ButtonExcluir, TextButton, Descricao } from './StylesModal'

export default function ModalExcluir({ visible, codigo, verificar }) {
    return (
            <Modal animationType='slide' transparent={true} visible={visible} onRequestClose={() => { verificar(visible) }}>
                <Main>
                    <Icon onPress={() => { verificar(visible) }}>
                        <AntDesign name="close" size={22} color="black" />
                    </Icon>
                    <DivText>
                        <Title>Deseja remover o produto?</Title>
                        <Descricao>O item: {codigo} será removido permanentemente.</Descricao>
                        <Descricao>Esta ação não poderá ser revertida. </Descricao>
                    </DivText>
                    <DivButtons>
                        <ButtonEdit><TextButton>Remover</TextButton></ButtonEdit>
                        <ButtonExcluir onPress={() => { verificar(visible) }}><Text>Cancelar</Text></ButtonExcluir>
                    </DivButtons>
                </Main>
            </Modal>
    )
}