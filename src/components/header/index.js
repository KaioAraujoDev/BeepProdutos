import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
    return(
      <View style={styles.header}>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'white',
    width: '100%',
    paddingTop: '10%',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderWidth: 0.8,
    borderColor: '#545457',
  }
})

export default Header;
