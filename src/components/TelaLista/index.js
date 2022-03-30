import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    VirtualizedList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import db from '../../../services/sqlite/SQLiteDatabase'

export default function TelaLista() {
    const [items, setItems] = useState([])
    const [list, setList] = useState([]);
    const [Loading, setLoading] = useState(false)
    const [search, setSearch] = useState('');

    //Select , busca dos dados na tabela 
    //Por se tratar de uma promisse logo essa função não vai ser executada imediamente 
    //sendo passada para a última função da callstack
    const Data = [
        {
            id: 1,
            code: 999999999999
        },
        {
            id: 2,
            code: 999999999999
        },
        {
            id: 3,
            code: 999999999999
        },
        {
            id: 4,
            code: 999999999999
        },
        {
            id: 5,
            code: 999999999999
        },
        {
            id: 6,
            code: 999999999999
        },
        {
            id: 7,
            code: 999999999999
        },
        {
            id: 8,
            code: 999999999999
        },
        {
            id: 9,
            code: 999999999999
        },
        {
            id: 10,
            code: 999999999999
        },
        {
            id: 11,
            code: 999999999999
        },
    ]


    useEffect(
        async function () {
            setLoading(true);
            return new Promise((resolve, reject) => {
                db.transaction(function (tx) {
                    tx.executeSql(
                        `select * from bars`,
                        [],
                        function (tx, res) {
                            for (let i = 0; i < res.rows.length; i++) {
                                setItems(oldArray => [...oldArray, res.rows.item(i)])
                                setList(oldArray => [...oldArray, res.rows.item(i)])
                            }

                            resolve(setLoading(false))
                        }
                    )
                })
            })
        }, [])

    //Função vai ser executada apenas quando o valor de search for alterado
    useEffect(() => {
        if (search === '') {
            setList(items)
        } else {
            setList(
                items.filter((item) => {
                    if (item.code.indexOf(search) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                })
            )
        }
    }, [search])

    //vari
   
const [itemSelect,setItemSelect] = useState(false)
    const renderItem = ({ item }) => {
        
        //função para verificar se o bloco é editavel ou não

        function verifyVisibility(id){
            //Quero que seja editavel apenas o campo com o id recebido
                setItemSelect(id)
        }


        // 1º Tenho que saber qual elemento foi selecionado
        //Posso passar por  parametro o id que foi selecionado
        return (
            <TouchableOpacity onLongPress={()=>{verifyVisibility(item.id)}} style={styles.boxLista}>
                <View style={[
                    styles.naoeditavel]}>
                    <Text style={[styles.textBoxLista, { fontSize: 19, textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }]}>Produto: <Text style={[styles.textBoxLista, { fontWeight: 'bold', fontSize: 18 }]}>{item.code}</Text></Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={[styles.textBoxLista, { fontSize: 16 }]}>Id: <Text style={{ fontSize: 13 }}>{item.id}</Text></Text>
                        <Text style={[styles.textBoxLista, { fontSize: 16 }]}>Quantidade: <Text style={{ fontSize: 13 }}>102</Text></Text>
                    </View>
                </View>
            </TouchableOpacity>
        )

    }


    //caso esteja carregando e o list ainda não foi preenchido
    //caso o loading esteja falso e o list foi prenchido
    //loading terminado e nada foi encontrado

    const VerifyItems = () => {
        if (Loading) {
            return (<ActivityIndicator color="#3FBFBF" size={85} />)
        } else if (list.length) {
            return (<FlatList data={list} renderItem={renderItem} />)
        }
        return (<Text>Nada Foi encontrado</Text>)
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Searchbar
                    placeholder="Produto"
                    onChangeText={setSearch}
                    value={search}
                    selectionColor='rgb(80,235,230)'
                    inputStyle={{ height: 50 }}
                    selectTextOnFocus={false}
                />
            </View>
            <View style={styles.listContainer} >
                {/* <VerifyItems />  */}
                <FlatList data={Data} renderItem={renderItem} inverted={true} />
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        marginBottom: 0
    },
    listContainer: {
        paddingVertical: 10,
        height: '95%',

        justifyContent: 'center'
    },
    boxLista: {
        backgroundColor: 'rgb(80,235,230)',
        marginBottom: 30,
        marginHorizontal: 40,
        height: 100,
        paddingTop: 5,
        paddingBottom: 20,
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
    editavel:{
        display:'none'
    },
    naoeditavel:{
        display: 'flex'
    }
})