import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

const BarraVertical = () => {
    return(
        <View style={styles.barra}></View>
    );
}
export default BarraVertical;

const styles = StyleSheet.create({
    barra: {
        height: '100%',
        width: 3,
        backgroundColor: 'black',
    }    
})