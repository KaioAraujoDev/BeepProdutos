import React,{useState,useEffect} from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    ProgressViewIOSComponent,

}
    from 'react-native';


export default function ModalInputs(props) {
    const[modalVisible,setModalVisible] = useState(false)
    const[Quantidade,setQuantidade] = useState(1)
    const[codigo,setCodigo] = useState(null)

    useEffect(()=>{
        if(props.habilitado){
            setModalVisible(true)
        }
    },[])
    
    return (
        //Quando o código for escaneado este modal deve abrir para terminar o prenchimento das informações
        //Apos isso ele deve ser fechado com o botao cancelar
        
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={()=>{
                 setModalVisible(!modalVisible)
            }}
        >
         
            <View style={styles.modal}>
                <View style={styles.blockInput}>
                    <Text style={styles.textLabel}>Código de barras</Text>
                    <TextInput style={styles.input} value={props.codigo} onChangeText={value=>setCodigo(value)} />
                </View>
               <View style={[styles.blockInput,{width:85}]}>
                   <Text style={styles.textLabel}>Quantidade</Text>
                   <TextInput  style={styles.input} 
                   keyboardType='numeric' 
                   defaultValue={Quantidade.toString()}
                   onChangeText={value=>setQuantidade(value)}
                   />
               </View>
                
                <View style={styles.blockButtons}>
                    <TouchableOpacity
                       onPress={function(){
                           props.fechar(modalVisible) 
                       }}
                    >
                        <Text style={styles.textBotao}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor:'#007CF9',padding:10}}
                        onPress={()=>{props.addFechar(modalVisible,codigo,Quantidade)}}
                    >
                        <Text style={[styles.textBotao,{color:'#fff',fontWeight:'bold'}]}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modal: {
        marginTop: '60%',
        marginHorizontal: 20,
        padding:25,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        shadowColor: "#000",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    input: {
        borderBottomWidth:1,
    },
    inputSelect:{
        borderBottomWidth:1,
        borderColor:'blue'
    },
    blockInput:{
        marginBottom:15
    },
    blockButtons:{
        flexDirection: 'row',
        width:150,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
        left:150,
       
    },
    textLabel:{
        fontSize:14,
        letterSpacing:0.2
    },
    textBotao:{
        color:'#000',
        letterSpacing:0.25,
        fontSize:14,

    }
})