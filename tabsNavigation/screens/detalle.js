import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ProfileDetail({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalle del Perfil</Text>
            <Text style={styles.description}>
                Aquí puedes ver más información sobre el usuario.
            </Text>

            <Button
                title="Regresar al perfil"
                color="green"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'green',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#333',
    },
});
