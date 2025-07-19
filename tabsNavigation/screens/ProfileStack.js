import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './profile';
import Detalle from './detalle';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileMain"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detalle"
        component={Detalle}
        options={{ title: 'Detalle del Perfil' }}
      />
    </Stack.Navigator>
  );
}
