import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
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

const Interruptor = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Text>
        {isEnabled ? 'Activado' : 'Desactivado'}
      </Text>
      <Switch
      trackColor={{false: '#767577', true:'#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnabled}
      >
      </Switch>
      
    </View>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <Texto></Texto>
      <Interruptor></Interruptor>
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