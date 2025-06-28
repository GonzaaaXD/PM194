import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

export default function App() {
  return(
    <ScrollView contentContainerStyle={styles.background} showsVerticalScrollIndicator={false} horizontal={true}>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
      <Text>Hola amigue mundo</Text>
    </ScrollView>
  );
};

// 4. Estilos simples
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  },
  overlay:{
    flex: 1,
    width:'100%'
  }
});