import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';


const Texto = ({style}) => {
  const [contenido, setContenido] = useState('Hola mundo React Native');
  const actualizaTexto = () => {
    setContenido('Hola mundo cómo estás?');
  };
   return (
    <View Style={{margin:10}}>
    <Text Style={[styles.text. style]}>{contenido}</Text>
    <Button title='actualizaTexto'onPress={actualizaTexto}color="purple"/>
    </View>
    );
};


export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}></Texto>
    
      <Texto style={styles.blue}></Texto>
      <Texto style={styles.green}></Texto>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'baseline',
    justifyContent: 'center',
    flexDirection:'row'
  },
  text: {
    color: 'white', 
    fontsize:27,
  },
  red:{backgroundColor:'red'},
  blue:{backgroundColor:'blue'},
  green:{backgroundColor:'green'},
})