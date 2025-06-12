import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

const Texto = () => {
  const [contenido, setContenido] = useState('Hola mundo React Native');
  const actualizaTexto = () => {
    setContenido('Estado actualizado del texto');
  };
  return(<Text onPress={actualizaTexto}>{contenido}</Text>)
};

const Boton = () => {
  const [titulo, setTitulo] = useState('Presionar');
  const actualizarTitulo = () => {
    setTitulo('Esto es ReactNative');
  };
  return(
    <Button title={titulo} onPress={actualizarTitulo}></Button>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
      <Boton></Boton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
