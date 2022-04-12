import React from 'react';
import { Modal, Text } from 'react-native';
import { Main ,Descricao} from './StyleDialog';
import LottieView from 'lottie-react-native';
export default function Dialog({ descricao, visible }) {
    return (
        <Modal animationType='slide' transparent={true} visible={false}>
            <Main>
               <LottieView source={require('../../assets/check.json')}
                autoPlay={true}
                loop={true}
               />
               <Descricao>{descricao}</Descricao>
            </Main>
        </Modal>
    )
}