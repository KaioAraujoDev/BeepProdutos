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
    alert(`Código de barras tem o tipo ${type} e código ${data} escaneado!`)
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
        width:500,
        height:'75%',
        flexDirection:'column',
        justifyContent: 'center',
        
    }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
   
    </View>
  );
}
