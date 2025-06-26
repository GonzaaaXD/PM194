import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Alert, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

// Evita que se oculte automáticamente el splash
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
  const prepare = async () => {
    // Aquí simulas la carga con timeout 3s
    await new Promise(resolve => setTimeout(resolve, 3000));
    setAppReady(true);
    await SplashScreen.hideAsync();
  };

  prepare();
  }, []);

  // Función para mostrar alertas simple y clara
  const showAlert = () => {
    if (!email.trim() || !password.trim() || !termsAccepted) {
      let msg = 'Por favor, completa todos los campos obligatorios.\n';
      if (!email.trim()) msg += '• Correo\n';
      if (!password.trim()) msg += '• Contraseña\n';
      if (!termsAccepted) msg += '• Aceptar términos\n';

      window.alert('Campos incompletos', msg);
    } else {
      window.alert('¡Bienvenido!', `Correo: ${email}\nContraseña: ${password}`);
    }
  };

  return (
    <ImageBackground 
      source={require('./assets/qro.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Mi App</Text>
        <Text style={styles.subtitle}>
          {appReady ? '¡Carga completa!' : 'Cargando...'}
        </Text>

        {appReady && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Correo electrónico"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#ccc"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <View style={styles.switchContainer}>
              <Switch
                value={termsAccepted}
                onValueChange={setTermsAccepted}
                thumbColor={termsAccepted ? 'orange' : '#ccc'}
              />
              <Text style={styles.switchText}>Aceptar Términos y Condiciones</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={showAlert}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: 'white',
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    color: 'white',
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
