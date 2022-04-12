import styled from 'styled-components/native'

const Main = styled.View`
    position:absolute;
    left:20%;
    top:30%;
    background-color:#fff
    height:200px;
    width:250px;
    border-radius:10px;
    shadow-color:#000;
    shadow-offset: 0px 1px;
    shadow-opacity:0.2;
    shadow-radius:1.4px;
    elevation:2;
    align-items:center;
    justify-content:flex-end;
`
const Descricao = styled.Text`
    font-size:16px;
    padding-bottom:5%;
`
export{
    Main,
    Descricao
}