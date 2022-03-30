import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
  
    props.onCodeScanned(type,data);

  };

   if (hasPermission === null) {
    return <Text>Permita o acesso a câmera</Text>;
   }
  if (hasPermission === false) {
    return <Text>Erro: sem acesso a câmera</Text>;
  }

  return (
    <View style={{
      height:'100%',
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
   
    </View>
  );
}
