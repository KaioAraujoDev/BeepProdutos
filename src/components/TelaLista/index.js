import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    KeyboardAvoidingView
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import db from '../../../services/sqlite/SQLiteDatabase'
import Item from './Item'

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
            code: 192039012
        },
        {
            id: 2,
            code: 12093012323
        }
    ]
    useEffect(
        async function () {
            setLoading(true)
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
    //Função de Busca
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

    const renderItem = ({ item }) => {
        return (
            <Item codigo={item.code} id={item.id} />
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
                {/* <VerifyItems /> */}
                <FlatList data={Data} renderItem={renderItem} keyExtractor={(item) => item.id} inverted={true} />
            </View>
        </View>

    );

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
        justifyContent: 'center',
       
    },
    boxLista: {
        justifyContent: 'center',
        backgroundColor: 'rgb(80,235,230)',
        marginBottom: 30,
        marginHorizontal: 40,
        height: 125,
        paddingTop: 10,
        paddingBottom: 10,
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
    editList: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        height: '50%',
    },
    blockEdit: {
        height: '100%',
    },
    input: {
        borderColor: '#000',
        borderBottomWidth: 1,
        width: '92%',
        height: '48.5%',
    },
    blockDivButtons: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '55%',
        paddingEnd: 20,
    },
    confirmBlockDivButtons: {
        backgroundColor: 'rgba(6,55,66,0.7)',
        padding: 7,
        color: 'white',
        borderRadius: 5
    },
    blockEditLabelBlock: {
        paddingLeft: '7%',
        paddingTop: 7,
        fontSize: 14
    },
    LabelBlockEdit: {
        fontSize: 14,
        fontWeight: 'bold'
    },
})
