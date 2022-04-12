import React from 'react';
import styled from 'styled-components/native'

const Icon = styled.TouchableOpacity`
    position:absolute
    top:7%;
    right:9%;
`
const Title = styled.Text`
    font-size:21px;
    font-weight:bold;
    margin:10px 0 15px 0;
`;
const DivButtons = styled.View`
    height:30%;
    justify-content:space-between;
`;
const DivText = styled.View`
    justify-content:flex-start;
`
const ButtonEdit = styled.TouchableOpacity`
    background-color:#1695CF;
    padding-vertical:7px;
    align-items:center;
    border-radius:5px;
`
const ButtonExcluir = styled.TouchableOpacity`
    padding-vertical:7px;
    align-items:center;
    border-radius:5px;
    background-color:#eee;
`
const TextButton = styled.Text`
    color:white;
    font-weight:bold
`
const Main = styled.View`
    padding:15px 50px 20px 50px;
    background-color:#fff;
    position:absolute;
    bottom: 0;
    width:100%;
    height:40%;
    border-top-left-radius:50px;
    border-top-right-radius:50px;
    elevation:10;
    justify-content:space-between;
    
`
const Input = styled.TextInput`
    border-color:black;
    border-width:1px;
    margin-bottom:10px;
    padding:5px;
    border-radius:4px;
`
const Label = styled.Text`
    font-size:16px;
    font-weight:bold;
    margin-bottom:5px;
`
const Descricao = styled.Text`
    font-size:14px;
    text-align:left;
`
export {
    Icon,
    Title,
    DivButtons,
    DivText,
    ButtonEdit,
    ButtonExcluir,
    Main,
    Input,
    Label,
    TextButton,
    Descricao
}

